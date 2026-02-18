$ErrorActionPreference = 'Stop'

$outFile = Join-Path (Get-Location) 'Codex_1month_Curriculum.xlsx'
$tempRoot = Join-Path (Get-Location) '_xlsx_build'
if (Test-Path $tempRoot) { Remove-Item $tempRoot -Recurse -Force }

$dirs = @('_rels','docProps','xl','xl/_rels','xl/worksheets')
foreach ($d in $dirs) { New-Item -ItemType Directory -Path (Join-Path $tempRoot $d) -Force | Out-Null }

function XEsc([string]$s) {
  if ($null -eq $s) { return '' }
  return [System.Security.SecurityElement]::Escape($s)
}
function InlineCell([string]$ref,[int]$style,[string]$text){
  $t = XEsc $text
  return ('<c r="{0}" s="{1}" t="inlineStr"><is><t>{2}</t></is></c>' -f $ref,$style,$t)
}
function NumCell([string]$ref,[int]$style,[string]$val){
  return ('<c r="{0}" s="{1}"><v>{2}</v></c>' -f $ref,$style,$val)
}
function FormulaCell([string]$ref,[int]$style,[string]$formula,[string]$val='0'){
  return ('<c r="{0}" s="{1}"><f>{2}</f><v>{3}</v></c>' -f $ref,$style,$formula,$val)
}
function Write-Utf8NoBom([string]$path,[string]$content){
  $enc = New-Object System.Text.UTF8Encoding($false)
  [System.IO.File]::WriteAllText($path, $content, $enc)
}

$curriculum = @(
  @{Topic='Getting Started with Codex'; Goal='Understand tools, workflow, and constraints'; Task='Read AGENTS.md, inspect workspace, map basic commands'; Hours='5'},
  @{Topic='Terminal Fundamentals'; Goal='Build command-line fluency'; Task='Practice navigation, file ops, redirection, and filtering'; Hours='5'},
  @{Topic='Prompt Design 1'; Goal='Write clear task prompts'; Task='Draft 20 prompts with objective, constraints, and output format'; Hours='5'},
  @{Topic='Prompt Design 2'; Goal='Reduce ambiguity'; Task='Rewrite vague asks into measurable requirements'; Hours='5'},
  @{Topic='Codebase Discovery'; Goal='Trace features quickly'; Task='Use rg to find entry points and dependency paths'; Hours='5'},
  @{Topic='Git Workflow Basics'; Goal='Track changes safely'; Task='Use status, diff, log, show, and branch naming rules'; Hours='5'},
  @{Topic='Safe Edit Loops'; Goal='Small and verifiable changes'; Task='Run 3 cycles: edit -> verify -> review diff'; Hours='5'},
  @{Topic='Running Tests'; Goal='Validate with confidence'; Task='Execute tests, inspect failures, and classify root causes'; Hours='5'},
  @{Topic='Debugging Essentials'; Goal='Reproduce issues reliably'; Task='Write reproducible bug reports and expected/actual outputs'; Hours='5'},
  @{Topic='Week 1 Review'; Goal='Close knowledge gaps'; Task='Summarize mistakes and create correction checklist'; Hours='5'},
  @{Topic='Refactoring Strategy'; Goal='Improve readability safely'; Task='Extract functions, remove duplication, rename for clarity'; Hours='5'},
  @{Topic='Code Review 1'; Goal='Learn review priorities'; Task='Focus on bugs, regressions, risk, and missing tests'; Hours='5'},
  @{Topic='Code Review 2'; Goal='Write actionable feedback'; Task='Produce 15 findings with severity and fix suggestions'; Hours='5'},
  @{Topic='Technical Documentation'; Goal='Create reusable docs'; Task='Write setup, runbook, troubleshooting, and FAQ sections'; Hours='5'},
  @{Topic='Automation Script 1'; Goal='Automate repetitive tasks'; Task='Build one script for lint + test + report output'; Hours='5'},
  @{Topic='Automation Script 2'; Goal='Improve failure handling'; Task='Add exit-code handling and readable error logs'; Hours='5'},
  @{Topic='API Practice'; Goal='Handle requests and errors'; Task='Implement status-based branching with sample endpoints'; Hours='5'},
  @{Topic='Data Processing'; Goal='Build transformation pipelines'; Task='Process CSV/JSON with validation and normalization rules'; Hours='5'},
  @{Topic='Performance Basics'; Goal='Find bottlenecks'; Task='Measure runtime, isolate slow spots, compare before/after'; Hours='5'},
  @{Topic='Week 2 Review'; Goal='Consolidate outputs'; Task='Organize artifacts and reprioritize weak areas'; Hours='5'},
  @{Topic='Team Collaboration'; Goal='Work like production teams'; Task='Break tasks into issues and define clear acceptance criteria'; Hours='5'},
  @{Topic='Requirement Analysis'; Goal='Convert needs into tasks'; Task='Turn user requests into implementation-ready scopes'; Hours='5'},
  @{Topic='Test Case Design'; Goal='Strengthen edge-case testing'; Task='Create 30 cases across normal, boundary, and error paths'; Hours='5'},
  @{Topic='Quality Gates'; Goal='Set release checks'; Task='Define pass/fail rules for lint, tests, and security scans'; Hours='5'},
  @{Topic='Incident Response'; Goal='Improve reliability mindset'; Task='Draft severity levels, communication templates, retrospectives'; Hours='5'},
  @{Topic='Mini Project 1'; Goal='End-to-end implementation'; Task='Plan and build a small feature with tests and docs'; Hours='5'},
  @{Topic='Mini Project 2'; Goal='Feedback-driven iteration'; Task='Apply review feedback and improve structure/performance'; Hours='5'},
  @{Topic='Mini Project 3'; Goal='Production-style packaging'; Task='Add usage notes, scripts, constraints, and release checklist'; Hours='5'},
  @{Topic='Final Review'; Goal='Readiness assessment'; Task='Audit all 30-day outcomes and patch weak spots'; Hours='5'},
  @{Topic='Capstone Day'; Goal='Deliver and plan next quarter'; Task='Present final output and define 3-month roadmap'; Hours='5'}
)

$contentTypes = @'
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">
  <Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>
  <Default Extension="xml" ContentType="application/xml"/>
  <Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml"/>
  <Override PartName="/xl/worksheets/sheet1.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>
  <Override PartName="/xl/worksheets/sheet2.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>
  <Override PartName="/xl/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml"/>
  <Override PartName="/docProps/core.xml" ContentType="application/vnd.openxmlformats-package.core-properties+xml"/>
  <Override PartName="/docProps/app.xml" ContentType="application/vnd.openxmlformats-officedocument.extended-properties+xml"/>
</Types>
'@

$rootRels = @'
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="xl/workbook.xml"/>
  <Relationship Id="rId2" Type="http://schemas.openxmlformats.org/package/2006/relationships/metadata/core-properties" Target="docProps/core.xml"/>
  <Relationship Id="rId3" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/extended-properties" Target="docProps/app.xml"/>
</Relationships>
'@

$core = @'
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<cp:coreProperties xmlns:cp="http://schemas.openxmlformats.org/package/2006/metadata/core-properties" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:dcterms="http://purl.org/dc/terms/" xmlns:dcmitype="http://purl.org/dc/dcmitype/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
  <dc:creator>Codex</dc:creator>
  <cp:lastModifiedBy>Codex</cp:lastModifiedBy>
  <dcterms:created xsi:type="dcterms:W3CDTF">2026-02-16T00:00:00Z</dcterms:created>
  <dcterms:modified xsi:type="dcterms:W3CDTF">2026-02-16T00:00:00Z</dcterms:modified>
  <dc:title>Codex 1-Month Curriculum</dc:title>
</cp:coreProperties>
'@

$app = @'
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Properties xmlns="http://schemas.openxmlformats.org/officeDocument/2006/extended-properties" xmlns:vt="http://schemas.openxmlformats.org/officeDocument/2006/docPropsVTypes">
  <Application>Microsoft Excel</Application>
  <DocSecurity>0</DocSecurity>
  <ScaleCrop>false</ScaleCrop>
  <HeadingPairs>
    <vt:vector size="2" baseType="variant">
      <vt:variant><vt:lpstr>Worksheets</vt:lpstr></vt:variant>
      <vt:variant><vt:i4>2</vt:i4></vt:variant>
    </vt:vector>
  </HeadingPairs>
  <TitlesOfParts>
    <vt:vector size="2" baseType="lpstr">
      <vt:lpstr>Curriculum</vt:lpstr>
      <vt:lpstr>Dashboard</vt:lpstr>
    </vt:vector>
  </TitlesOfParts>
  <AppVersion>16.0300</AppVersion>
</Properties>
'@

$workbook = @'
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <bookViews><workbookView xWindow="0" yWindow="0" windowWidth="24000" windowHeight="12000"/></bookViews>
  <sheets>
    <sheet name="Curriculum" sheetId="1" r:id="rId1"/>
    <sheet name="Dashboard" sheetId="2" r:id="rId2"/>
  </sheets>
  <calcPr calcId="181029" fullCalcOnLoad="1"/>
</workbook>
'@

$wbRels = @'
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet1.xml"/>
  <Relationship Id="rId2" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet2.xml"/>
  <Relationship Id="rId3" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/>
</Relationships>
'@

$styles = @'
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<styleSheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main">
  <fonts count="3">
    <font><sz val="11"/><color theme="1"/><name val="Calibri"/><family val="2"/></font>
    <font><b/><sz val="11"/><color rgb="FFFFFFFF"/><name val="Calibri"/><family val="2"/></font>
    <font><b/><sz val="16"/><color rgb="FF1F2937"/><name val="Calibri"/><family val="2"/></font>
  </fonts>
  <fills count="5">
    <fill><patternFill patternType="none"/></fill>
    <fill><patternFill patternType="gray125"/></fill>
    <fill><patternFill patternType="solid"><fgColor rgb="FF1D4ED8"/><bgColor indexed="64"/></patternFill></fill>
    <fill><patternFill patternType="solid"><fgColor rgb="FFE0ECFF"/><bgColor indexed="64"/></patternFill></fill>
    <fill><patternFill patternType="solid"><fgColor rgb="FFF8FAFC"/><bgColor indexed="64"/></patternFill></fill>
  </fills>
  <borders count="1"><border><left/><right/><top/><bottom/><diagonal/></border></borders>
  <cellStyleXfs count="1"><xf numFmtId="0" fontId="0" fillId="0" borderId="0"/></cellStyleXfs>
  <cellXfs count="8">
    <xf numFmtId="0" fontId="0" fillId="0" borderId="0" xfId="0"/>
    <xf numFmtId="0" fontId="2" fillId="3" borderId="0" xfId="0" applyFont="1" applyFill="1" applyAlignment="1"><alignment horizontal="center" vertical="center"/></xf>
    <xf numFmtId="0" fontId="1" fillId="2" borderId="0" xfId="0" applyFont="1" applyFill="1" applyAlignment="1"><alignment horizontal="center" vertical="center"/></xf>
    <xf numFmtId="0" fontId="0" fillId="4" borderId="0" xfId="0" applyFill="1" applyAlignment="1"><alignment horizontal="left" vertical="center" wrapText="1"/></xf>
    <xf numFmtId="0" fontId="0" fillId="4" borderId="0" xfId="0" applyFill="1" applyAlignment="1"><alignment horizontal="center" vertical="center" wrapText="1"/></xf>
    <xf numFmtId="9" fontId="0" fillId="4" borderId="0" xfId="0" applyNumberFormat="1" applyFill="1" applyAlignment="1"><alignment horizontal="center" vertical="center"/></xf>
    <xf numFmtId="0" fontId="0" fillId="3" borderId="0" xfId="0" applyFill="1" applyAlignment="1"><alignment horizontal="left" vertical="center"/></xf>
    <xf numFmtId="9" fontId="0" fillId="3" borderId="0" xfId="0" applyNumberFormat="1" applyFill="1" applyAlignment="1"><alignment horizontal="center" vertical="center"/></xf>
  </cellXfs>
  <cellStyles count="1"><cellStyle name="Normal" xfId="0" builtinId="0"/></cellStyles>
</styleSheet>
'@

$rows1 = New-Object System.Collections.Generic.List[string]
$rows1.Add('<row r="1" ht="30" customHeight="1">' + (InlineCell 'A1' 1 '1-Month Codex Learning Curriculum (5+ hours/day)') + '</row>')
$rows1.Add('<row r="2" ht="22" customHeight="1">' + (InlineCell 'A2' 6 'Update Status column to auto-refresh progress and dashboard.') + '</row>')
$rows1.Add('<row r="4" ht="24" customHeight="1">' + (InlineCell 'A4' 2 'Day') + (InlineCell 'B4' 2 'Topic') + (InlineCell 'C4' 2 'Goal') + (InlineCell 'D4' 2 'Practice / Assignment') + (InlineCell 'E4' 2 'Min Hours') + (InlineCell 'F4' 2 'Status') + (InlineCell 'G4' 2 'Progress') + '</row>')

$start = 5
for($i=0; $i -lt $curriculum.Count; $i++){
  $r = $start + $i
  $d = $curriculum[$i]
  $formula = ('IF(F{0}="Done",1,IF(F{0}="In Progress",0.5,0))' -f $r)
  $rows1.Add('<row r="' + $r + '" ht="48" customHeight="1">' +
    (InlineCell ("A$r") 4 ((($i+1).ToString()) + '')) +
    (InlineCell ("B$r") 3 $d.Topic) +
    (InlineCell ("C$r") 3 $d.Goal) +
    (InlineCell ("D$r") 3 $d.Task) +
    (NumCell ("E$r") 4 $d.Hours) +
    (InlineCell ("F$r") 4 'Not Started') +
    (FormulaCell ("G$r") 5 $formula '0') +
    '</row>')
}

$sheet1 = @"
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main">
  <sheetViews><sheetView workbookViewId="0"><pane ySplit="4" topLeftCell="A5" activePane="bottomLeft" state="frozen"/></sheetView></sheetViews>
  <sheetFormatPr defaultRowHeight="18"/>
  <cols>
    <col min="1" max="1" width="8" customWidth="1"/>
    <col min="2" max="2" width="24" customWidth="1"/>
    <col min="3" max="3" width="34" customWidth="1"/>
    <col min="4" max="4" width="50" customWidth="1"/>
    <col min="5" max="5" width="12" customWidth="1"/>
    <col min="6" max="6" width="14" customWidth="1"/>
    <col min="7" max="7" width="10" customWidth="1"/>
  </cols>
  <sheetData>
    $($rows1 -join "`n    ")
  </sheetData>
  <autoFilter ref="A4:G34"/>
  <mergeCells count="2"><mergeCell ref="A1:G1"/><mergeCell ref="A2:G2"/></mergeCells>
  <dataValidations count="1"><dataValidation type="list" allowBlank="1" showInputMessage="1" showErrorMessage="1" sqref="F5:F34"><formula1>"Not Started,In Progress,Done"</formula1></dataValidation></dataValidations>
  <conditionalFormatting sqref="G5:G34"><cfRule type="dataBar" priority="1"><dataBar><cfvo type="num" val="0"/><cfvo type="num" val="1"/><color rgb="FF22C55E"/></dataBar></cfRule></conditionalFormatting>
  <pageMargins left="0.5" right="0.5" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>
"@

$rows2 = New-Object System.Collections.Generic.List[string]
$rows2.Add('<row r="1" ht="28" customHeight="1">' + (InlineCell 'A1' 1 'Dashboard') + '</row>')
$rows2.Add('<row r="3">' + (InlineCell 'A3' 6 'Total Days') + (NumCell 'B3' 4 '30') + '</row>')
$rows2.Add('<row r="4">' + (InlineCell 'A4' 6 'Done') + (FormulaCell 'B4' 4 'COUNTIF(Curriculum!F5:F34,"Done")' '0') + '</row>')
$rows2.Add('<row r="5">' + (InlineCell 'A5' 6 'In Progress') + (FormulaCell 'B5' 4 'COUNTIF(Curriculum!F5:F34,"In Progress")' '0') + '</row>')
$rows2.Add('<row r="6">' + (InlineCell 'A6' 6 'Not Started') + (FormulaCell 'B6' 4 'COUNTIF(Curriculum!F5:F34,"Not Started")' '30') + '</row>')
$rows2.Add('<row r="7">' + (InlineCell 'A7' 6 'Overall Progress') + (FormulaCell 'B7' 7 'IF(B3=0,0,B4/B3)' '0') + '</row>')
$rows2.Add('<row r="9">' + (InlineCell 'A9' 6 'Week') + (InlineCell 'B9' 6 'Progress') + '</row>')
$rows2.Add('<row r="10">' + (InlineCell 'A10' 6 'Week 1 (Day 1-7)') + (FormulaCell 'B10' 7 'COUNTIF(Curriculum!F5:F11,"Done")/7' '0') + '</row>')
$rows2.Add('<row r="11">' + (InlineCell 'A11' 6 'Week 2 (Day 8-14)') + (FormulaCell 'B11' 7 'COUNTIF(Curriculum!F12:F18,"Done")/7' '0') + '</row>')
$rows2.Add('<row r="12">' + (InlineCell 'A12' 6 'Week 3 (Day 15-21)') + (FormulaCell 'B12' 7 'COUNTIF(Curriculum!F19:F25,"Done")/7' '0') + '</row>')
$rows2.Add('<row r="13">' + (InlineCell 'A13' 6 'Week 4 (Day 22-30)') + (FormulaCell 'B13' 7 'COUNTIF(Curriculum!F26:F34,"Done")/9' '0') + '</row>')

$sheet2 = @"
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main">
  <sheetViews><sheetView workbookViewId="0"/></sheetViews>
  <sheetFormatPr defaultRowHeight="18"/>
  <cols><col min="1" max="1" width="24" customWidth="1"/><col min="2" max="2" width="14" customWidth="1"/></cols>
  <sheetData>
    $($rows2 -join "`n    ")
  </sheetData>
  <conditionalFormatting sqref="B7 B10:B13"><cfRule type="dataBar" priority="1"><dataBar><cfvo type="num" val="0"/><cfvo type="num" val="1"/><color rgb="FF2563EB"/></dataBar></cfRule></conditionalFormatting>
  <pageMargins left="0.5" right="0.5" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>
"@

Write-Utf8NoBom (Join-Path $tempRoot '[Content_Types].xml') $contentTypes
Write-Utf8NoBom (Join-Path $tempRoot '_rels/.rels') $rootRels
Write-Utf8NoBom (Join-Path $tempRoot 'docProps/core.xml') $core
Write-Utf8NoBom (Join-Path $tempRoot 'docProps/app.xml') $app
Write-Utf8NoBom (Join-Path $tempRoot 'xl/workbook.xml') $workbook
Write-Utf8NoBom (Join-Path $tempRoot 'xl/_rels/workbook.xml.rels') $wbRels
Write-Utf8NoBom (Join-Path $tempRoot 'xl/styles.xml') $styles
Write-Utf8NoBom (Join-Path $tempRoot 'xl/worksheets/sheet1.xml') $sheet1
Write-Utf8NoBom (Join-Path $tempRoot 'xl/worksheets/sheet2.xml') $sheet2

$zipPath = Join-Path (Get-Location) 'Codex_1month_Curriculum.zip'
if (Test-Path $zipPath) { Remove-Item $zipPath -Force }
Compress-Archive -Path (Join-Path $tempRoot '*') -DestinationPath $zipPath -Force
if (Test-Path $outFile) { Remove-Item $outFile -Force }
Rename-Item -Path $zipPath -NewName (Split-Path $outFile -Leaf)
Remove-Item $tempRoot -Recurse -Force
Write-Output "created: $outFile"

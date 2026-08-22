$file = "c:\Users\Admin\Documents\zoyotripholidays\app\national\spiti\[slug]\page.tsx"
$content = Get-Content $file -Delimiter ([char]0)
$content = $content -replace "KashmirPackageDetailPage", "SpitiPackageDetailPage"
$content = $content -replace "kashmirData = allDestinations\['kashmir'\]", "spitiData = allDestinations['spiti']"
$content = $content -replace "kashmirData\.packages", "spitiData.packages"
$content = $content -replace "/national/kashmir", "/national/spiti"
$content = $content -replace "Kashmir", "Spiti"
$content = $content -replace "KASHMIR", "SPITI"
Set-Content $file -Value $content

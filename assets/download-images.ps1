# PowerShell script to download sample car images

# Sports cars
$sportsCarUrls = @(
    @{url = "https://source.unsplash.com/random/600x400/?ferrari"; filename = "cars/sports/ferrari.jpg"},
    @{url = "https://source.unsplash.com/random/600x400/?lamborghini"; filename = "cars/sports/lamborghini.jpg"},
    @{url = "https://source.unsplash.com/random/600x400/?porsche"; filename = "cars/sports/porsche.jpg"},
    @{url = "https://source.unsplash.com/random/600x400/?mclaren"; filename = "cars/sports/mclaren.jpg"},
    @{url = "https://source.unsplash.com/random/600x400/?bugatti"; filename = "cars/sports/bugatti.jpg"}
)

# Vintage cars
$vintageCarUrls = @(
    @{url = "https://source.unsplash.com/random/600x400/?vintage-ford"; filename = "cars/vintage/ford.jpg"},
    @{url = "https://source.unsplash.com/random/600x400/?vintage-chevrolet"; filename = "cars/vintage/chevrolet.jpg"},
    @{url = "https://source.unsplash.com/random/600x400/?vintage-mustang"; filename = "cars/vintage/mustang.jpg"},
    @{url = "https://source.unsplash.com/random/600x400/?vintage-cadillac"; filename = "cars/vintage/cadillac.jpg"},
    @{url = "https://source.unsplash.com/random/600x400/?vintage-rolls-royce"; filename = "cars/vintage/rolls-royce.jpg"},
    @{url = "https://source.unsplash.com/random/600x400/?vintage-jaguar"; filename = "cars/vintage/jaguar.jpg"},
    @{url = "https://source.unsplash.com/random/600x400/?vintage-bentley"; filename = "cars/vintage/bentley.jpg"},
    @{url = "https://source.unsplash.com/random/600x400/?vintage-mercedes"; filename = "cars/vintage/mercedes.jpg"}
)

# Luxury cars
$luxuryCarUrls = @(
    @{url = "https://source.unsplash.com/random/600x400/?rolls-royce"; filename = "cars/luxury/rolls-royce.jpg"},
    @{url = "https://source.unsplash.com/random/600x400/?bentley"; filename = "cars/luxury/bentley.jpg"},
    @{url = "https://source.unsplash.com/random/600x400/?mercedes"; filename = "cars/luxury/mercedes.jpg"},
    @{url = "https://source.unsplash.com/random/600x400/?audi"; filename = "cars/luxury/audi.jpg"},
    @{url = "https://source.unsplash.com/random/600x400/?bmw"; filename = "cars/luxury/bmw.jpg"},
    @{url = "https://source.unsplash.com/random/600x400/?jaguar"; filename = "cars/luxury/jaguar.jpg"},
    @{url = "https://source.unsplash.com/random/600x400/?lexus"; filename = "cars/luxury/lexus.jpg"}
)

# Electric cars
$electricCarUrls = @(
    @{url = "https://source.unsplash.com/random/600x400/?tesla"; filename = "cars/electric/tesla.jpg"},
    @{url = "https://source.unsplash.com/random/600x400/?nissan-leaf"; filename = "cars/electric/nissan-leaf.jpg"},
    @{url = "https://source.unsplash.com/random/600x400/?chevy-bolt"; filename = "cars/electric/chevy-bolt.jpg"},
    @{url = "https://source.unsplash.com/random/600x400/?rivian"; filename = "cars/electric/rivian.jpg"},
    @{url = "https://source.unsplash.com/random/600x400/?lucid"; filename = "cars/electric/lucid.jpg"},
    @{url = "https://source.unsplash.com/random/600x400/?polestar"; filename = "cars/electric/polestar.jpg"}
)

# Combine all URLs
$allUrls = $sportsCarUrls + $vintageCarUrls + $luxuryCarUrls + $electricCarUrls

# Download each image
foreach ($item in $allUrls) {
    Write-Host "Downloading $($item.url) to $($item.filename)"
    Invoke-WebRequest -Uri $item.url -OutFile $item.filename
}

Write-Host "All images downloaded successfully!" 
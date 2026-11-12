Add-Type -AssemblyName System.Drawing
$sourcePath='C:\Users\SHIVAR~1\AppData\Local\Temp\codex-clipboard-d74fcd8e-a398-40c9-8570-c1de1ba56c38.png'
$src=[System.Drawing.Bitmap]::new($sourcePath);$minX=$src.Width;$minY=$src.Height;$maxX=0;$maxY=0
for($y=0;$y -lt $src.Height;$y+=2){for($x=0;$x -lt $src.Width;$x+=2){if($src.GetPixel($x,$y).A -gt 12){if($x -lt $minX){$minX=$x};if($x -gt $maxX){$maxX=$x};if($y -lt $minY){$minY=$y};if($y -gt $maxY){$maxY=$y}}}}
$pad=8;$left=[Math]::Max(0,$minX-$pad);$top=[Math]::Max(0,$minY-$pad);$width=[Math]::Min($src.Width-$left,$maxX-$minX+1+2*$pad);$height=[Math]::Min($src.Height-$top,$maxY-$minY+1+2*$pad)
$crop=[System.Drawing.Rectangle]::new($left,$top,$width,$height);$out=[System.Drawing.Bitmap]::new($width,$height,[System.Drawing.Imaging.PixelFormat]::Format32bppArgb);$g=[System.Drawing.Graphics]::FromImage($out);$g.SmoothingMode=[System.Drawing.Drawing2D.SmoothingMode]::HighQuality;$g.InterpolationMode=[System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic;$g.DrawImage($src,[System.Drawing.Rectangle]::new(0,0,$width,$height),$crop,[System.Drawing.GraphicsUnit]::Pixel)
$out.Save('src/assets/images/ganrise-client-logo-transparent.png',[System.Drawing.Imaging.ImageFormat]::Png);New-Item -ItemType Directory -Force public/images|Out-Null;$out.Save('public/images/ganrise-client-logo-transparent.png',[System.Drawing.Imaging.ImageFormat]::Png)
$g.Dispose();$out.Dispose();$src.Dispose()

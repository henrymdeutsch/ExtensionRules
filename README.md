# Uses
I injects CSS/JS into websites for a few primary reasons:
  - allow the ability to skip all video ads w/ key tracking commands
  - remove banner ads and sidebars to make main content bigger and uncluttered
  - "de-fang" addictive websites like Youtube so that I spend less time on them
  - replace site logos with pictures of Elon Musk's head, or a Neuralink logo

## Examples

The default.css/js is the most powerful of the styles:
- makes all videos on domain go 2x or 3x or 1000x speed on certain keyboard commands, effectively allowing you to skip any ad
  - it monitors keyboard presses and modulates speed based on command. More info in .js file
  - I've also found this very useful outside of ads, with regular content. You can get around Youtube's cap speed on videos.

For example youtube.com.css/js will:
- remove all banner ads
- track time spent that day (in all sessions) on Youtube with badge in upper right 
- limit the number of thumbnails on the main page
- entirely remove the sidebar of thumbnails off the main page
- replace youtube logos with elon musk heads

# Terminus

WIP New VNDB Profile UI

Inspiration:
- ~~I don't like using VNDB to manage my list~~
- Trying [HTTPS-Based VNDB API](https://vndb.org/d11)
- [VNDBStat](https://vnstat.net/)
- Angular practice

Roadmap:
- Novel component to actually show VN details
- Ability to update novels in-app
- Transition/Animations on component load/close
- User statistics (Chart.js)
- Build and implement [erogamescape](http://erogamescape.dyndns.org/~ap2/ero/toukei_kaiseki/) wrapper for comparison (most likely a Python web-scraper)

Settings Roadmap:
- Different Display Options
- R18 Toggle (Should include both cover art and game screenshots)
- Main Language Conversion


<details>
<summary>UI Concepts</summary>

`#profile`
![image](https://user-images.githubusercontent.com/82582439/233954681-37307a41-d2a9-4044-9d72-da18b93c001b.png)

`#profile/all` and `#profile/{playing/finished/wishlist etc...}`
![image](https://user-images.githubusercontent.com/82582439/233955197-a4ae4b48-1480-45d1-99de-154aa7831a40.png)

above with other functionalities
![image](https://user-images.githubusercontent.com/82582439/233955800-1762f922-398d-4f4f-a351-d30457a47e0d.png)

above on novel clicked, show details (Modal on brwoser, 100vw/vh on devices)
![image](https://user-images.githubusercontent.com/82582439/233957886-badc24b8-7b16-4387-a9f0-07bea337861c.png)



</details>

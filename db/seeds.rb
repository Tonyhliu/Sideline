# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

guest_user = User.create!(username: "Guest",
                          password: "Password")

comment_user2 = User.create!(username: "TonyDaTiger",
                          password: "password",
                          avatar_url: "http://res.cloudinary.com/dcbb8bnvk/image/upload/w_400,h_400,c_crop,g_face,r_max/w_200/IMG_6184_ffefob.png")

comment_user3 = User.create!(username: "Alexandra",
                            password: "password",
                            avatar_url: "http://res.cloudinary.com/dcbb8bnvk/image/upload/w_400,h_400,c_crop,g_face,r_max/w_200/DSCN8558_lunodp.jpg")

comment_user4 = User.create!(username: "DaRealKushPatel",
                            password: "password",
                            avatar_url: "http://res.cloudinary.com/dcbb8bnvk/image/upload/w_400,h_400,c_crop,g_face,r_max/w_200/kush_xuj00h.png")

comment_user5 = User.create!(username: "Wolverdude",
                            password: "password",
                            avatar_url: "http://res.cloudinary.com/dcbb8bnvk/image/upload/w_400,h_400,c_crop,g_face,r_max/w_200/wolverdude_htbjlf.png")

comment_user6 = User.create!(username: "KentheTA",
                            password: "password",
                            avatar_url: "http://res.cloudinary.com/dcbb8bnvk/image/upload/w_400,h_400,c_crop,g_face,r_max/w_200/kenTA_c5t7kv")

comment_user7 = User.create!(username: "GagetheTA",
                            password: "password",
                            avatar_url: "http://res.cloudinary.com/dcbb8bnvk/image/upload/w_400,h_400,c_crop,g_face,r_max/w_200/gage_ww9yps.png")

comment_user8 = User.create!(username: "KevintheTA",
                            password: "password",
                            avatar_url: "http://res.cloudinary.com/dcbb8bnvk/image/upload/w_400,h_400,c_crop,g_face,r_max/w_200/kevinTA_s1z6hg.png")

demo_story = Story.create!(title: "Warriors Rumors: Latest Intel on Durant, Barnes",
                          user_id: 3,
                          body:
"<div> The Golden State Warriors won 73 games last season, but after losing in the NBA Finals, you can expect the team to be aggressive in the offseason.
While the core of Stephen Curry, Klay Thompson and Draymond Green is unlikely to change, the front office will do whatever it takes to improve the roster
and get back on top in the 2016-2017 season, whether that means through free agency or trades. There will be dozens of maneuvers throughout the summer, but
here is a look at some of the bigger potential moves Warriors fans should watch for in the coming weeks. The biggest story of the NBA offseason is Kevin
Durant's free agency, and the Warriors are front and center. Sam Amick of USA Today reported Golden State was one of six teams to earn a meeting with the
former MVP, including the Oklahoma City Thunder. While otherteams are going to try to stay in this race, chances are unlikely Durant chooses a team outside
of these top six. Marc J. Spears of The Undefeated added the meeting will take place Friday in the Hamptons. Unsurprisingly, the wing has become the Warriors'
top target in free agency, according to Marc Stein of ESPN.com. Stein also explains the team's confidence in this pursuit: But the Warriors, sources say,
increasingly believe their chances of persuading Durant to leave the Thunder after a successful nine-season run were enhanced significantly by the fact that
Golden State lost the NBA Finals to Cleveland in seven games despite taking a 3-1 series lead. [...] `All I can say is I will be very aggressive,` Warriors
owner Joe Lacob vowed on his way out of Oracle Arena after Game 7. It makes sense for every team to do whatever it takes to sign Durant. The four-time scoring
champion is one of the best offensive players in basketball and could turn any team into a contender. For the Warriors, he would make an already elite offense
almost unstoppable. However, actually getting him to sign will be a challenge. He has familiarity with the Thunder, while teams like the Boston Celtics and
Los Angeles Clippers can offer a bigger market. Additionally, Golden State is one of the few spots where he might have to reduce his role with other scorers
already on the roster. Still, the fact that you can almost guarantee a ring with the Warriors is as good of a draw as Durant might find. Stein and Spears
reported the Philadelphia 76ers are heavily interested in Barnes, who averaged 11.7 points and 4.9 rebounds per game this past season. As a restricted free
agent, the Warriors have the right to match any offer, although they clearly won't be able to if they end up signing Durant. With that said, Golden State
would like to keep the 24-year-old wing if possible. As Stein and Spears explained, `Sources said Tuesday that the Warriors, however, rate keeping Barnes
as a top priority in the event they are unable to lure Durant away from the Thunder.` There are conflicting opinions on Barnes heading into the summer.
On one hand, he is an unproven player who has been nothing more than a fourth option on his team. He generally succeeded by getting wide-open shots without
much focus from opposing defense. On the other hand, he is an athletic wing who can shoot and guard multiple positions defensively while just scratching
the surface of his potential. In the right situation, he could develop into a star. Teams like Philadelphia and others will be willing to take that chance,
which could price him out of the Warriors' budget regardless of Durant's decision. </div>",
                          picture_url: "http://res.cloudinary.com/dcbb8bnvk/image/upload/v1467739313/kd_n8pxrm.jpg")

demo_story2 = Story.create!(title: "Iggy Azalea caught Nick Young with other women on home security video",
                          user_id: 2,
                          body:
"<div> Iggy Azalea caught Nick Young on camera, and the Lakers guard couldn't say `it wasn't me.`
After a report came out Wednesday night claiming Young got his former girlfriend pregnant,
Azalea took to Twitter to deny the rumors. She also provided the real reason why the celebrity
couple broke up, and it was the reason everyone thought.) Young and Azalea were engaged for over
a year before splitting up. Their relationship became publicly rocky after Young was secretly
caught on video by teammate D'Angelo Russell admitting to being with other women. Azalea put up
with that for a little while, but it became too much when Young kept violating her trust. Her final
tweet in the early hours Thursday read, `People in this world really are f—ed up.`
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </div>",
                          picture_url: "http://res.cloudinary.com/dcbb8bnvk/image/upload/v1467736480/iggy_gq4jif.jpg")

demo_story3 = Story.create!(title: "Giants active reliever Romo, sent Suarez down",
                           user_id: 4,
                           body:
"<div> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.)
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </div>",
                          picture_url: "http://res.cloudinary.com/dcbb8bnvk/image/upload/v1467521114/sfg_g7120s.jpg")

demo_story4 = Story.create!(title: "Surfing Guatemala",
                          user_id: 6,
                          picture_url: "http://res.cloudinary.com/dcbb8bnvk/image/upload/v1468017589/surf_rgdfb0.jpg",
                          body:
"<div> No one comes to Guatemala just to surf. There are far too many other reasons. Even the roads are enthralling; not a trip goes by without something happening.
A car melting at the roadside, dripping plastic, evil smoke fuming from every crevice. Tyres exploding, engines backfiring. And how did that truck get there — not
just on the wrong carriageway, but with its mangled axles hanging clear off the far kerb? And will that little tow- truck really be able to drag it back? It’s
interesting to watch, once you give up hope of arriving on time. Meanwhile carnival-style “chicken buses” (old converted US school buses) festooned in lights,
chrome and decals, are facing off in daredevil overtaking lurches gone wrong, while miles of traffic are backing up, and the morning air between the forested hills
fills with the cries of countless airhorns. And even when the traffic does flow, there’s the breath-stopping drama of seeing ordinary people — kids on half-broken bikes,
barefoot farmers laden with loads of yard-long yams, women with blanketed babies on their backs, and broad bowls on their heads — ramble nonchalantly along the verges, as
if there weren’t 20-ton hunks of steel hurtling past inches away, causing their blankets to flap and hair to jump in the traffic’s wake. The meeting of two worlds, one
organic, reaching back into ancient history, the other young, fast: the already-dying carbon age. The roads are a scene unto themselves. Then there’s Antigua, the former capital,
nestled among volcanoes, an untouched jewel of Spanish grace, of courtyard after courtyard watered with fountains, and a lot of 16th-century churches, cloisters, convents, stranded
ever since the 1773 earthquake forced the capital to move elsewhere. There’s the “eternal spring” of the highlands, a near-constant 25C. And most of all there’s the beating heart of
the Mundo Maya, the Mayan world — not just the most spectacular abandoned cities on earth, replete with forests of pyramids, temples and stelae, testament to the high culture of
the classic Maya, but also the contemporary Maya Indians, who weave the most beautiful fabrics, grow the most enormous vegetables, and make up nearly half of the country’s 16m people.
On the other hand, Guatemala is part of the same long isthmus as Costa Rica and El Salvador, whose Pacific beaches have turned into thriving surf destinations. It has the same swells and
pressure systems, and while it may be at the lower end of general infrastructure, everything a surfer needs is here. So when I set out for Guatemala with our 16-year-old son, the prospect
of catching some waves made a handy additional allure. </div>")

demo_story5 = Story.create!(title: "Fantasy Football 2016: Predicting the Top NFL Sleeper at Each Position",
                          user_id: 8,
                          picture_url: "http://res.cloudinary.com/dcbb8bnvk/image/upload/v1468018035/football_njkza8.jpg",
                          body:
"<div>he pace may seem slow this time in the NFL offseason, but we are inching ever closer to the start of training camps and the 2016 preseason. For fantasy football enthusiasts, this means we're also drawing nearer to draft season.
Unless you're a complete novice in the fantasy football realm, you're well aware of the sleeper label. It's generally applied to a player who could provide surprisingly big fantasy production in relation to a late draft slot. These aren't the trendy names heading into draft season, but they could be incredibly valuable as the season unfolds.
Sleepers are usually found at the big fantasy positions—quarterback, wide receiver and running back—but they can be found at every position. Yes, there are even sleeper kickers.
We're going to take a look at players we believe can be the top sleepers at each fantasy position. Our choices will be based on factors like average draft position (ADP*), roster competition, team construction, scheme fit and player potential. he pace may seem slow this time in the NFL offseason, but we are inching ever closer to the start of training camps and the 2016 preseason. For fantasy football enthusiasts, this means we're also drawing nearer to draft season.
Unless you're a complete novice in the fantasy football realm, you're well aware of the sleeper label. It's generally applied to a player who could provide surprisingly big fantasy production in relation to a late draft slot. These aren't the trendy names heading into draft season, but they could be incredibly valuable as the season unfolds.
Sleepers are usually found at the big fantasy positions—quarterback, wide receiver and running back—but they can be found at every position. Yes, there are even sleeper kickers.
We're going to take a look at players we believe can be the top sleepers at each fantasy position. Our choices will be based on factors like average draft position (ADP*), roster competition, team construction, scheme fit and player potential. </div>")

demo_story6 = Story.create!(title: "Euro 2016: Anotine Griezmann's French connection with public ensures final victory can bring joy back to the nation",
                          user_id: 7,
                          picture_url: "http://res.cloudinary.com/dcbb8bnvk/image/upload/v1468018574/soccer_sdxzog.jpg",
                          body:
"<div> For a nation that has been distracted by more serious and worrying issues than hosting a football tournament in recent months, it was perhaps inevitable that Antoine Griezmann would emerge as the poster boy who has reconciled a troubled population in the blue shirt of France.
Griezmann, the Atletico Madrid forward whose career has been spent solely in Spain since leaving his family home in Macon to play for Real Sociedad as a teenager, will lead France into the Euro 2016 final against Portugal on Sunday having scored six goals so far in the competition for Didier Deschamps’ team.
The 25-year-old, with Portuguese heritage, is the smiling, joyous number seven who has given France a reason to shift its focus back onto the football pitch following the terror attacks in Paris last November which continue to shadow the country today.
But Griezmann’s healing powers are not restricted to his contribution for Deschamps’ team.
With his sister, Maud, a survivor of the attack at the Bataclan Theatre which left 89 dead last November – the 28-year-old spoke this week of how she lay motionless on the floor for up to ninety minutes while gunmen indiscriminately shot those still alive – Griezmann has now become a positive symbol linking last November and the new sense of unity flowing through the country, with his own personal experience of the terror attacks offering a true connection to the French public.
And after scoring both goals in the 2-0 semi-final victory over Germany in Marseille on Thursday, France’s new golden boy admits he and his team-mates feel a responsibility to bring joy back to the nation.
“It was our duty to win the matches, to try and entertain the French people and try and go all the way in this tournament,” Griezmann said. “That's what we needed to do, representing France. I hope we can continue now in the final.
“Our duty is to win matches to give pleasure to the French. We want them to be proud of the France team and I hope we end with a beautiful story.”
The anxiety and apprehension which shrouded France at the outset of Euro 2016 has dissipated during the four weeks that have seen Deschamps’ team evoke the spirit of Aime Jacquet’s 1998 World Cup winners.</div>")

demo_story7 = Story.create!(title: "NASCAR Season Launch Campaign Honored At 2016 CLIO Sports Awards",
                          user_id: 5,
                          picture_url: "http://res.cloudinary.com/dcbb8bnvk/image/upload/v1468018574/nascar_xm2rrs.jpg",
                          body:
"<div> DAYTONA BEACH, FLA. (July 8, 2016) – Inspired by the simple truth that' all human beings love to race, NASCAR's season launch marketing campaign, Ready. Set. Race, was celebrated as the winner of three Silver CLIO Sports Awards during the ceremony last night in New York.
The overall campaign was awarded Silver honors in the Integrated Campaign category, while the unique social media promotion, the Hashtag 500, and lead creative spot were recognized in the Social Media and Film categories, respectively.
Developed by Ogilvy & Mather New York, Ready. Set. Race introduced the 2016 NASCAR Sprint Cup Series™ season leading up to the 2016 Daytona 500 ® through a blend of digital and social media activation, and advertising creative.
'Ready. Set. Race is a significant campaign for NASCAR in that it represents an evolved approach to how we market the sport,' said Jill Gregory, NASCAR senior vice president, Marketing and Industry Services. 'We're prioritizing fan engagement above all else and leading campaigns with digital and social marketing, and that's created a more immersive experience for NASCAR fans.
The Ready. Set. Race campaign and 'It's In Our Blood' spot were shortlist honorees at Cannes Lions 2016. 'Our goal for Ready. Set. Race was to help NASCAR engage with its fans in new and different ways,' said Teddy Lynn, chief creative officer, Content & Social, Ogilvy & Mather. 'This year we created a campaign that encouraged consumers to bring their natural-born racing mentality to life. We're thrilled with the response the work received at the CLIO Sports Awards and last month in Cannes, but even more so with the reaction from our most important audience: NASCAR fans.'
'Another NASCAR creative spot, titled 'What If,' received a Bronze CLIO Sports award in the Short Form category. The 90-second spot launched in 2015 and recounts the history of NASCAR, from the earliest days of stock car racing through to today's action-packed events at iconic race tracks like Daytona International Speedway.
Halfway through the 2016 season, the combination of great racing and a marketing strategy driven by digital and social media have helped drive fan consumption of the sport. From January through June, NASCAR has more than doubled its follower growth compared to the same period last season. In addition, engagement with social content has increased by 83 percent year-over-year, with more than 114 million total engagements.
The 2016 Daytona 500 saw more NASCAR-related social conversation than any single day since the inception of the NASCAR Fan and Media Engagement Center (FMEC). Social conversation was up 44 percent compared to last year’s race.
The Hashtag 500 fan race on Twitter to win Dale Earnhardt Jr. 's firesuit generated the most NASCAR-related mentions in one minute (13,000) since the inception of the FMEC.</div>")


# # need to implement tags

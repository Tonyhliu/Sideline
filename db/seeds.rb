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
                          password: "password111",
                          avatar_url: "http://res.cloudinary.com/dcbb8bnvk/image/upload/w_400,h_400,c_crop,g_face,r_max/w_200/IMG_6184_ffefob.png")

comment_user3 = User.create!(username: "Alexandra",
                            password: "password111",
                            avatar_url: "http://res.cloudinary.com/dcbb8bnvk/image/upload/w_400,h_400,c_crop,g_face,r_max/w_200/DSCN8558_lunodp.jpg")

comment_user4 = User.create!(username: "DaRealKushPatel",
                            password: "password111",
                            avatar_url: "http://res.cloudinary.com/dcbb8bnvk/image/upload/w_400,h_400,c_crop,g_face,r_max/w_200/kush_xuj00h.png")

comment_user5 = User.create!(username: "Wolverdude",
                            password: "password111",
                            avatar_url: "http://res.cloudinary.com/dcbb8bnvk/image/upload/w_400,h_400,c_crop,g_face,r_max/w_200/wolverdude_htbjlf.png")

comment_user6 = User.create!(username: "KentheTA",
                            password: "password111",
                            avatar_url: "http://res.cloudinary.com/dcbb8bnvk/image/upload/w_400,h_400,c_crop,g_face,r_max/w_200/kenTA_c5t7kv")

comment_user7 = User.create!(username: "GagetheTA",
                            password: "password111",
                            avatar_url: "http://res.cloudinary.com/dcbb8bnvk/image/upload/w_400,h_400,c_crop,g_face,r_max/w_200/gage_ww9yps.png")

comment_user8 = User.create!(username: "KevintheTA",
                            password: "password111",
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

demo_story8 = Story.create!(title: "Portugal beats France in Euro 2016 final to win first major title",
                            user_id: 7,
                            picture_url: "http://res.cloudinary.com/dcbb8bnvk/image/upload/v1468196746/s8_nodl0e.jpg",
                            body:
"<div> A mostly Ronaldo-less Portugal, a team that won just one of its seven games in France during regulation, won the European Championship with a 1-0 extra-time win over the hosts on Sunday, thanks to a late, long strike from Eder.
In spite of Cristiano Ronaldo leaving the field early in the first half with a knee injury, Portugal upset the heavily favored French by doing what it had all tournament: defend stoutly and hang on for a liberating goal. That’s how a team that tied all three of its group stage games and only advanced thanks to the new and more forgiving format in the expanded 24-team field wound up champions of Europe – the country’s first major soccer title.
“We said we would win it for him,” Portugal defender Pepe said of Ronaldo. “And we managed to win it for him.” After a vicious surprise attack on the field by thousands of moths, the game made a manic start. Well, the French did. They pressed the Portuguese so high and so hard that they forced mistakes from their very first possession. Every last ball seemed to fall for France then. A crumbling Portugal couldn’t even hold possession for more than a pass or two. That meant it had to chase the game while the French could conserve energy to press their opponents some more when they lost the ball, pursuing them like rabid dogs. It seemed like the Portuguese were stuck in a vicious cycle and had no choice but to surrender an enormous amount of France possession in their own third.
The interruptions snapped France’s trance and Portugal reorganized, finding a little more time and room on the ball and playing out of the stifling pressure. Moussa Sissoko, however, kept monstering Portugal up his right wing, or sometimes drifting into the middle. After half an hour, Payet got away on the left again. He laid off for a central Sissoko, who spun away from his man and lashed a shot right at Patricio.
France would not convert its first-half dominance into a goal.
The French would come to regret that because Portugal managed to slow and squelch the game in the second act, which became something of a stalemate. France abandoned the urgency that had served it so well in the first half, instead opting for more methodical attacks. But Portugal had no issue dealing with those, given the amount of manpower it had parked centrally.
Only a few times did the French find a crack to slither through. In the 66th minute, Kingsley Coman whipped in a good cross to the far post, where Griezmann nodded it just over. Olivier Giroud had a look as well, but he, like Sissoko and his rocket shot from distance later on, were denied by the excellent Patricio yet again.
At the other end, only Nani’s quasi-shot threatened France goalkeeper Hugo Lloris, who wasn’t fooled by that effort or Ricardo Quaresma’s bicycle kick on the rebound, which zipped straight at him.
In injury time of regulation, substitute André-Pierre Gignac, of Mexican league fame, turned Pepe inside-out and nearly won it for France, but he agonizingly pinged his wide-open finish off the inside of the near post. </div>")

demo_story9 = Story.create!(title: "Serena Williams wins seventh Wimbledon, record-equalling 22nd major titles",
                            user_id: 2,
                            picture_url: "http://res.cloudinary.com/dcbb8bnvk/image/upload/v1468196752/s9_xqlsld.jpg",
                            body:
"<div> This time, Serena Williams wouldn't be denied.
Deprived of a record-tying 22nd grand slam title in the Australian Open and French Open finals this year, Williams got to No. 22 Saturday by defeating a dogged Angelique Kerber 7-5 6-3 in a high-quality Wimbledon final.
It was the same Kerber who beat Williams in Melbourne in January but the world No. 1 turned the tables on the grass at the All England Club with a clinical display of power tennis amid windy conditions.
'I have definitely had some sleepless nights with a lot of stuff, coming so close and feeling it and not being able to get there,' Williams, who was also foiled in her bid to achieve a calendar-year grand slam at last year's U.S. Open, told reporters.
'This tournament I came in with a different mindset. In Melbourne I thought I played well but Angelique played great, and better. So I knew going into this one I needed to be calm and be confident and play the tennis I've been playing for well over a decade.'
She certainly did that.
The 34-year-old struck 39 winners. Williams only faced one break point, at 3-3 in the second, and saved it with one of her 13 aces.
'Of course it feels disappointing, that's for sure,' Kerber, who finished with a respectable 12 winners and nine unforced errors, told reporters. 'But also I know that I played a good final.
'I lost against a really strong Serena today. This makes it a little bit better, that I know that she won the match, not that I lost the match, because she played very well.'
Williams and Kerber's fellow German Steffi Graf now tally 22 majors, the most in the Open Era of professional tennis. Talk now will surely center on the American attempting to get to Margaret Court's 24 grand slams, the all-time record. Court was in attendance Saturday.
Williams didn't want to dwell on the next step up the ladder, especially since she endured struggles to win her 18th major -- tying Chris Evert and Martina Navratilova -- and the 22nd.
'One thing I learned about last year is to enjoy the moment,' said Williams. 'I'm definitely going to enjoy this.'
</div>")

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

demo_story11 = Story.create!(title: "MacKinnon signs 7-year deal with Avalanche",
                            user_id: 4,
                            picture_url: "http://res.cloudinary.com/dcbb8bnvk/image/upload/v1468196744/s11_roxixv.jpg",
                            body:
"<div>
The Colorado Avalanche have signed forward Nathan MacKinnon to a $44.1 million, seven-year deal that runs through the 2022-23 season.
The 20-year-old MacKinnon had 21 goals and 31 assists last season. He missed the last 10 games after he sprained a ligament in his knee. MacKinnon also sat out the final 18 games a year ago because of a broken foot.
He was the No. 1 pick in the 2013 draft and went on to win the Calder Trophy as the league's top rookie.
''Signing Nathan to a long-term contract was a priority this offseason,'' Colorado general manager Joe Sakic said Friday in a release. ''He is going to be a key part of our team for many years to come and it was important to secure his rights moving forward.''
The Avalanche missed the postseason for a second straight year, but are banking heavily on a rebound behind a young nucleus that also includes Matt Duchene and captain Gabriel Landeskog.
''The pressure has risen since signing this,'' said MacKinnon, who is from Halifax, Nova Scotia, and will spend time this offseason working out with Pittsburgh Penguins star Sidney Crosby. ''They're making it a point that they want me to help get us back to the Cup. That's the simple goal behind this.
''I really think the players we have, the young guys we have, the veterans - we have a very good mix. It's been a disappointing couple of seasons. But I truly believe we're going to be a very strong team and a contender for years to come.''
</div>")

demo_story10 = Story.create!(title: "Did UFC 200 deliver?",
                            user_id: 5,
                            picture_url: "http://res.cloudinary.com/dcbb8bnvk/image/upload/v1468196744/s10_ivyxnu.jpg",
                            body:
"<div>
LAS VEGAS – UFC 200 was an epic card on paper, hailed far and wide as the greatest card in the sport’s history, but at its conclusion, though a title changed hands, there was no truly memorable bout.
Fights that were expected to produce fireworks were often desultory affairs.
It might have been significantly different if it had been Jon Jones and Daniel Cormier going at it for the undisputed light heavyweight belt in the main event.
Instead, Jones was nowhere to be found, yanked from the card late Wednesday after failing a drug test. UFC officials appeared to make a statement just before Cormier walked out to fight Anderson Silva, Jones’ 41-year-old replacement. They played a video in the arena chronicling Jones’ drug-test issues and the numerous other problems that have dogged an otherwise brilliant career.
It was a strange night, during which the massive crowd at T-Mobile Arena lustily booed Cormier, one of the sport’s true good guys, when he opted to take Silva down and tried to finish him on the ground.
At one point during the bout, the fans chanted, “Stand them up,” as Cormier had pinned Silva on his back and was dropping elbows on him.
Cormier, who called Silva his idol, said he couldn’t concern himself with the crowd’s reaction. He had to fight the best way he could in order to win.
“I would say to you, you stand in front of Anderson Silva for 15 minutes if you have the ability to take him down,” Cormier said. “I stood in there a little bit at times. We traded some shots. A couple of times I almost went back to the way I fought against [Alexander] Gustafsson, where he’d hit me and I wanted to hit him back.
“I have to fight smarter than that. The circumstances under which this fight came together, it was really a tough situation for me to go into. How do I win? You don’t just knock Anderson Silva out in one minute, two minutes. He’s too good for that.”
</div>")

demo_story12 = Story.create!(title: "U.S. gymnast Gabby Douglas’s spot on the Olympic roster may be in jeopardy",
                            user_id: 8,
                            picture_url: "http://res.cloudinary.com/dcbb8bnvk/image/upload/v1468196745/s12_kylf3e.jpg",
                            body:
"<div>
This was not supposed to be part of the story reigning Olympic champion Gabby Douglas had in mind when she set her sights on Rio.
A revelation in London four years ago, Douglas figured her bid for another shot at glory would be easy. Hard to blame her considering the way she so effortlessly reached the top of the podium in 2012, a soaring victory that made her a crossover star.
“I came back and said, ‘Yes, this is going to be cake,'” Douglas said.
For a stretch last fall and this spring, it was. A silver medal in the all-around at the 2015 world championships showed her return was hardly just vanity run amok. Her professional effort while capturing events in New Jersey and Italy in March stirred inevitable comparisons to her sprint to Olympic gold.
Yet sometime over the last month, the momentum stalled. The Douglas that hopped off the beam in frustration during the first night of Olympic Trials on Friday hardly looked like she was having a good time. Her all-around total of 58.550 puts her seventh heading into Sunday’s finale, when the five-woman team expected to dominate the Summer Games will be announced.
Douglas described her effort as “just OK” when she knows much more is required. While the Olympic spot that once seemed automatic is still well within reach, the 20-year-old acknowledges the pressure has gotten to her. She figured she would have no trouble handling it when she returned to competition in March 2015.
“I think there’s more expectations now than there were before,” she said. “I’ve just got to go out there and just do it, not just shy away and test the water. I’ve got to dive in.”
That wasn’t a problem earlier in her career, when her fearlessness made her seem impervious to the stage. But after a so-so effort at national championships in St. Louis two weeks ago — when her fourth-place finish was well behind Simone Biles, Laurie Hernandez and Aly Raisman — Douglas decided to tweak her coaching situation. She made Christian Gallardo her primary coach, a role Kittia Carpenter had been filling since Douglas began training at Buckeye Gymnastics in Columbus, Ohio, two years ago.
Douglas emphasized the decision was pragmatic, not personal. Gymnasts are allowed one coach on the event floor at the Olympics, and Gallardo — who had been splitting the duties with Carpenter — seemed a more natural fit to handle various responsibilities like spotting her during routines.
Many of Douglas’ peers on the national team, though, are still training with coaches they’ve been with since turning their first back handspring. Douglas has become a bit of a nomad over the last six years, moving from Virginia Beach to Iowa to California then back to Iowa before starting fresh in Columbus. The fact she’s prospered despite near constant change is a testament to her talent, which seems to thrive when the stakes are raised.
That’s what happened in 2012. It’s what happened last October, when she shook off lethargic training to finish a strong second to Biles at worlds. Douglas thought it would happen at nationals and trials too. And it hasn’t. At least not yet.
“I would be, ‘No, I’m fine. I can do this. When competition rolls around, I got it,'” she said. “The performances were OK. I was too relaxed. I got too far behind.”
Douglas believes she’s spent too much time focusing on “the wrong thing,” unable to completely block out the noise that seems to follow her wherever she goes. When she appeared too serious during national championships, social media lit up with criticism. In some ways, the detractors weren’t wrong.
“I lost the joy,” she said. “I forgot what it means to go out and have fun, and it’s catching up.”
Douglas presents a complex challenge for national team coordinator Martha Karolyi, who seems intent on giving Douglas every opportunity to get right. Two weeks after saying it’s how athletes are doing now — and not their gaudy resumes — that matters most in picking the team, Karolyi clarified her standards when pressed about Douglas’ lingering sluggishness.
“We look for the potential and you look for the fact of what you see what the girls were able to do in the past also,” Karolyi said.
Karolyi gave Douglas a brief pep talk as they walked off the floor Friday, one Douglas needed badly.
“I was kind of crushed after, and when she came over, she was like, ‘OK, everything’s good,'” Douglas said. “I’m just going to go on to Sunday and bang it out.”
Probably a good idea if she wants to erase any lingering doubt in Karolyi’s mind.
The sloppy ending to her otherwise steady performance Friday, when she wobbled near the end of her beam routine and was unable to save it before jumping to the floor in frustration, left her visibly shaken. The girl whose life has literally become a reality show — “Douglas Family Gold” just wrapped its first season on the Oxygen Network — is hoping for one more dash of the magic that once came so naturally.
“I don’t want to finish like this,” Douglas said. “I don’t want to finish with St. Louis being not good and trials being OK. I really want to finish on a high note and not let myself go down.”
</div>")

demo_story13 = Story.create!(title: "Ko, Henderson lead young cast taking center stage at U.S. Women's Open",
                            user_id: 3,
                            picture_url: "http://res.cloudinary.com/dcbb8bnvk/image/upload/v1468196743/s13_e4m6aj.jpg",
                            body:
"<div>
Three players have won eight of the last 13 LPGA Tour events. Their combined age? A mere 57.
World No. 1 Lydia Ko has won three times this year, including her second major with a 72nd-hole birdie to win the ANA Inspiration in April. The 19-year-old from New Zealand took advantage of a window created by world No. 7 Ariya Jutanugarn, who lost control of the tournament with three holes to play. The win was Ko’s second in a row.
Jutanugarn recovered quickly from the major heartbreak, winning three consecutive tournaments to sweep the LPGA’s May docket. All of it. And those were the 20-year-old Thai’s first three LPGA wins. At the second major of the year, the KPMG Women’s PGA Championship, Jutanugarn finished a shot out of a playoff at Sahalee with Ko and the new world No. 2.
Brooke Henderson is an 18-year-old Canadian of whom a lot was expected when she turned pro. However, she wasn’t gifted a clear path to LPGA status with an exemption to the Tour’s age floor. So, she earned it. She won last year in Portland to earn her full-time status. Then, she stared down Ko on the first playoff hole in Washington with one of the most clutch shots in major championships history. Suddenly, she had two LPGA wins, including becoming the second-youngest major winner in women’s golf history — just older than when Ko won the Evian Championship last September. For good measure, Henderson successfully defended that original Portland title last week with a fairly easy win.
And those are the stars that will get top billing on Thursday in Silicon Valley when the U.S. Women’s Open tees off from CordeValle near San Jose, Calif.
The USGA even went so far as to put Ko and Henderson together for the first two days. They’re joined on the tee sheet by world No. 4 Lexi Thompson, who, at 20, has also already won this season.
Thompson is a fan of her playing partners.
“It’s great to watch them both on the golf course and their attitudes and just their demeanors on the golf course,” Thompson said. “They’re aggressive players, and just consistent overall. You can’t really even find a weakness in their game, and that’s why they’re so good.”
And Henderson admires Ko.
“Lydia Ko is amazing,” Henderson said. “She’s an inspiration to all of us girls out here, and I think everyone in the world, basically. She’s done amazing things in her career and she’s only a couple months older than I am.”
The feeling is mutual from Ko about Henderson.
“She’s an aggressive player, but at the same time she’s smart,” Ko said. “And I think she’s one of the most confident putters out there, too. So it’s been really cool to watch her play as kind of a fan perspective, too.”
There’s been an effort to build up the result — a dramatic one, no doubt — of one tournament as the start of a lengthy rivalry between Ko and Henderson. It seems rivalry is the wrong word. These players want to win, certainly, but there also seems an appreciation of each of their strengths. They don’t get the ball in the hole the same way.
Ko is straight, steady and cool under pressure.
Henderson is long and has a great sense of timing.
Jutanugarn manages her game extremely well, ditching driver many weeks in favor of position that affords her opportunities for aggression.
Thompson dominates courses with her unadulterated length.
Frankly, the idea of a two-player race for the throne — or the CME Globe, the Tour’s season-long points race — undersells the strength of the LPGA: its depth. There’s Jutanugarn and Thompson. There’s Ha Na Jang, who won twice early in the year. And the depth is young. Through 19 events this season, only one player, Anna Nordqvist near Atlantic City in June, over the age of 23 has won.
The odds, then, suggest another sub-23 player will win a major this week, the most important of the five on the schedule. This is the biggest tournament in women’s golf, not only with the biggest purse but the most cache. It is also being played on a course that’s just actually slightly younger than the top two players in the field.
CordeValle, opened in 1999, is a Robert Trent Jones Jr. design that has served as the host of the PGA Tour’s Safeway Open (nee Frys.com Open). It’s not setup with deep rough like a typical USGA setup, but rather, the body has embraced the inconsistent depth. The fairways and greens will dry out over the next four days, encouraging funky bounces and awkward lies. The player that can stay true to themselves and still get around near the daily par of 72 should have a great chance on Sunday.
The question is if that player will be the undisputed queen of the game, the insurgent smiling Canadian, the headstrong Jutanugarn or the all-American Thompson. Or, as In-Gee Chun showed last year in winning this title at Lancaster C.C. in Pennsylvania, someone could spoil the script.
</div>")

demo_story14 = Story.create!(title: "Clayton Kershaw Throws 25 Pitches In Pregame Bullpen Session",
                            user_id: 2,
                            picture_url: "http://res.cloudinary.com/dcbb8bnvk/image/upload/v1468196743/s14_jdrlk7.jpg",
                            body:
"<div>
Clayton Kershaw threw 25 pitches off a mound Sunday and Dodgers manager Dave Roberts says there was 'definitely encouraging' progress in the left-hander's rehab from a back injury.
The Dodgers have not set a timetable for the three-time Cy Young Award winner's return, but Roberts says he will not be in the rotation when the team returns from the All-Star break.
Bud Norris, Brandon McCarthy and Kenta Maeda are scheduled to pitch the three games beginning Friday in Arizona. Scott Kazmir and Hyun-Jin Ryu will pitch the first two games in Washington on July 19 and 20.
Asked if Kershaw could join the Dodgers' rotation after each pitcher takes one turn, Roberts said he was 'not sure.'
Kershaw (11-2, 1.79) is eligible to come off the 15-day disabled list on Monday.
Blue Jays: Encarnacion to serve 1-game suspension
TORONTO -- Blue Jays slugger Edwin Encarnacion has dropped his appeal of a one-game suspension for making contact with umpire Vic Carapazza and will sit out Toronto's final game before the All-Star break, Sunday against Detroit.
An All-Star for the third time this season, Encarnacion is hitting .267 with a team-high 23 home runs. He leads the majors with 80 RBIs.
He was suspended for bumping Carapazza's shoulder after being ejected after the first inning in Toronto's 19-inning loss to Cleveland on July 1. Encarnacion was upset for being called out on strikes to end the inning, the third Blue Jays batter of the inning to strike out looking.
Manager John Gibbons came out to break up the argument and was also ejected.
Later in the game, Carapazza ejected Toronto catcher Russell Martin for arguing balls and strikes. An irate Martin had to be restrained by two coaches. Martin was not suspended.
All-Star Game: Quintana replaces Salazar
SAN DIEGO -- Chicago White Sox pitcher Jose Quintana has replaced Cleveland's Danny Salazar on the AL All-Star roster.
A first-time All-Star, Quintana is 7-8 with a 3.21 ERA, sixth-best in the AL at the start of Sunday. He joins teammate Chris Sale on the AL roster.
Kansas City's Wade Davis, Boston's Craig Kimbrel and Toronto's Marco Estrada also were dropped from the AL pitching staff because of injuries, and Cleveland's Corey Kluber and Toronto's Aaron Sanchez were added.
In the NL, Los Angeles' Clayton Kershaw and New York's Noah Syndergaard got hurt and won't pitch along with Stephen Strasburg, who just came off the disabled list, and San Francisco's Madison Bumgarner, who starts Sunday. New York's Bartolo Colon, San Diego's Drew Pomeranz and Washington's Max Scherzer were added.
In the infield, Aldemys Diaz replaced St. Louis teammate Matt Carpenter, and in the outfield Cincinnati's Jay Bruce and Pittsburgh's Starling Marte replaced the Mets' Yoenis Cespedes and Chicago's Dexter Fowler.
Miami's Marcell Ozuna and Colorado's Carlos Gonzalez entered the starting lineup in place of Cespedes and Fowler.
</div>")

demo_story15 = Story.create!(title: "Rio 2016: N.J. HS star Sydney McLaughlin reaches 400 hurdles final at Olympic Trials",
                            user_id: 6,
                            picture_url: "http://res.cloudinary.com/dcbb8bnvk/image/upload/v1468196743/s15_jh9xsu.jpg",
                            body:
"<div> Sydney McLaughlin, New Jersey's high school phenom, advanced to the final of the women's 400-meter hurdles by winning her semifinal race in the rain in 55.23 on Friday night at the U.S. Olympic Track and Field Trials at Hayward Field in Eugene, Oregon.
The 16 year-old McLaughlin, who will be a senior at Union Catholic High School in Scotch Plains, will have a chance to become the youngest athlete to make the U.S. Olympic track and field team since 1980 when she competes in Sunday's final, which is scheduled for 7:03 p.m. EST. The top three finishers in Sunday's final will represent the U.S. at the Olympic Games next month in Rio de Janeiro, Brazil.
McLaughlin, running in lane 6, was in second place behind 2012 Olympian T'erea Brown after nine hurdles, but she rallied off the 10th and final barrier to take the lead for good and then eased up as she crossed the line a few strides ahead of Brown, second in 55.70. Brown, the 2011 NCAA champion at the University of Miami, was 6th in the 400 hurdles at 2012 Olympic Games in London.
McLaughlin's 55.23 was the second fastest of the semifinals. Only Dalilah Muhammad, who won the other semifinal in 54.14, ran faster than McLaughlin.
Shamier Little of Texas A&M, the world leader this season and the only person to ever beat McLaughlin in the 400 hurdles, failed to make the final as she placed 5th in her heat in 55.64. Little, a 3-time NCAA 400 hurdle champion and the 2015 silver medalist at the World Championships, dealt McLaughlin her only 400 hurdles loss when Little was first and McLaughlin was second at the 2014 U.S. Junior National Championships. McLaughlin, just 14 at the time of that race, hasn't a lost to anyone at any distance since then.
</div>")

# # need to implement tags

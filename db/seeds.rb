# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

# guest_user = User.create(username: "Guest", password: "Password");

demo_story = Story.create(title: "Warriors Rumors: Latest Intel on Durant, Barnes",
                          user_id: 1,
                          body: "The Golden State Warriors won 73 games last season, but after losing in the NBA Finals, you can expect the team to be aggressive in the offseason.
                                While the core of Stephen Curry, Klay Thompson and Draymond Green is unlikely to change, the front office will do whatever it takes to improve the roster and get back on top in the 2016-2017 season, whether that means through free agency or trades.
                                There will be dozens of maneuvers throughout the summer, but here is a look at some of the bigger potential moves Warriors fans should watch for in the coming weeks. The biggest story of the NBA offseason is Kevin Durant's free agency, and the Warriors are front and center.
                                Sam Amick of USA Today reported Golden State was one of six teams to earn a meeting with the former MVP, including the Oklahoma City Thunder. While other teams are going to try to stay in this race, chances are unlikely Durant chooses a team outside of these top six.
                                Marc J. Spears of The Undefeated added the meeting will take place Friday in the Hamptons.
                                Unsurprisingly, the wing has become the Warriors' top target in free agency, according to Marc Stein of ESPN.com. Stein also explains the team's confidence in this pursuit:
                                But the Warriors, sources say, increasingly believe their chances of persuading Durant to leave the Thunder after a successful nine-season run were enhanced significantly by the fact that Golden State lost the NBA Finals to Cleveland in seven games despite taking a 3-1 series lead. [...]
                                `All I can say is I will be very aggressive,` Warriors owner Joe Lacob vowed on his way out of Oracle Arena after Game 7.
                                It makes sense for every team to do whatever it takes to sign Durant. The four-time scoring champion is one of the best offensive players in basketball and could turn any team into a contender. For the Warriors, he would make an already elite offense almost unstoppable.
                                However, actually getting him to sign will be a challenge. He has familiarity with the Thunder, while teams like the Boston Celtics and Los Angeles Clippers can offer a bigger market. Additionally, Golden State is one of the few spots where he might have to reduce his role with other scorers already on the roster.
                                Still, the fact that you can almost guarantee a ring with the Warriors is as good of a draw as Durant might find. Stein and Spears reported the Philadelphia 76ers are heavily interested in Barnes, who averaged 11.7 points and 4.9 rebounds per game this past season. As a restricted free agent, the Warriors have the right to match any offer, although they clearly won't be able to if they end up signing Durant.
                                With that said, Golden State would like to keep the 24-year-old wing if possible. As Stein and Spears explained, `Sources said Tuesday that the Warriors, however, rate keeping Barnes as a top priority in the event they are unable to lure Durant away from the Thunder.`
                                There are conflicting opinions on Barnes heading into the summer. On one hand, he is an unproven player who has been nothing more than a fourth option on his team. He generally succeeded by getting wide-open shots without much focus from opposing defense.
                                On the other hand, he is an athletic wing who can shoot and guard multiple positions defensively while just scratching the surface of his potential. In the right situation, he could develop into a star.
                                Teams like Philadelphia and others will be willing to take that chance, which could price him out of the Warriors' budget regardless of Durant's decision.")

demo_story2 = Story.create(title: "Iggy Azalea caught Nick Young with other women on home security video",
                          user_id: 2,
                          body: "Iggy Azalea caught Nick Young on camera, and the Lakers guard couldn't say `it wasn't me.`
                                After a report came out Wednesday night claiming Young got his former girlfriend pregnant, Azalea took to Twitter to deny the rumors. She also provided the real reason why the celebrity couple broke up, and it was
                                the reason everyone thought.) Young and Azalea were engaged for over a year before splitting up. Their relationship became publicly rocky after Young was secretly
                                caught on video by teammate D'Angelo Russell admitting to being with other women. Azalea put up with that for a little while, but it became too much when Young kept violating her trust. Her final tweet in the early hours Thursday read, `People in this world really are f—ed up.`
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                                eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")


# need to implement tags

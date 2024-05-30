# Fitcode

 > _Note:_ This document is meant to evolve throughout the planning phase of your project.    
 > That is, it makes sense for you commit regularly to this file while working on the project (especially edits/additions/deletions to the _Highlights_ section).

#### Q1: What are you planning to build?

YOUR ANSWER GOES HERE ...

Our team is planning to build a physical fitness multiplayer game on the web.  As a group, we wanted to attempt to solve the problem of an unhealthy work/school-life balance.  Specifically, we wanted to find a solution to motivate people to workout and maintain good physical health.  One observation our group realized was that people tend to be more inclined to workout/do sports with friends/family.  Going along this observation, we are planning to build an online game that allows users to compete against other users to try and gain as many points as possible by performing physical challenges (reaching x number of steps in a single day etc), with the goal of accumulating points to finish atop a leaderboard.  For our standard mode, our plan is that every day, random fitness challenges are generated and assigned point values.  From there, users can decide which fitness challenges to go for with the goal of gaining as much points as possible, while also staying fit in the process.  We plan to implement both private and public lobbies, which can allow friend/family groups to compete against each other while also staying physically fit or gym enthusiasts to find a new way to shake up their workout routine.  Although we don't plan to offer material prizes to users who are at the top of the leaderboard, we hope that our product can help add an element of friendly competition which will motivate our users to continue on their fitness journey.

 * Short (2-5 min' read)
 * Start with a single sentence, high-level description of the product.
 * Be clear - Describe the problem you are solving in simple terms.
 * Be concrete. For example:
    * What are you planning to build? Is it a website, mobile app,
   browser extension, command-line app, etc.?      
    * When describing the problem/need, give concrete examples of common use cases.
 * Focus on *what* your product does, and avoid discussing *how* you're going to implement it.      
   For example: This is not the time or the place to talk about which programming language and/or framework you are planning to use.
 * **Feel free (and very much encouraged) to include useful diagrams, mock-ups and/or links**.


#### Q2: Who are your target users? (2-3 personas)

YOUR ANSWER GOES HERE ...

 * Short (2-5 min' read max)
 * Be specific (e.g. )
 * You can create your personas as part of this Markdown file, or add a link to an external site (for example, [Xtensio](https://xtensio.com/user-persona/)), or add a pdf

#### Q3: Why would your users choose your product? What are they using today to solve their problem/need?

YOUR ANSWER GOES HERE ...

As university students, we understand that academics can take a toll on one's physical and mental health.  From stress caused by trying to catch up on work and extended periods of time working on assignments, we feel that students often struggle to find the motivation and time to work out and maintain good physical health.  Throughout our experiences in university, we noticed that a good number of students perform physical activity in groups.  Whether through working out in the gym in small groups or participating in team sports, company can be a great motivator on working out.  So in hopes of helping find our users find that "spark" to start or continue working out, we decided to base our solution through company and competition.  

By creating a sense of competition within our games, we hope that this will inspire our users to step out of their comfort zone and work out.  One benefit that our product has is the randomization of fitness challenges during the game period, which can allow users to do challenges that work on different parts of their body.  For instance, challenges can range from cardio-based to work on different core muscle groups, and can be used to introduce beginners to possible steps they can add to their workouts outside of the game.  Furthermore, while we want to challenge our users, we believe that another key benefit of our product is our accessibility to all levels of gym users.  From people who just got their first gym membershipt to seasoned gym veterans, our games can be used and enjoyed by people from different fitness backgrounds due to our multi-level challenge system.

Two more benefits that come with our app is companionship and personal goal-setting.  Starting with companionship, partaking in our games with a group of your friends can be an enjoyable experience depending on the group dynamic between said friend group.  However, another perspective of the benefit of companionship is that competing in global lobbies with people with similar gym experience/skill level, which is done through our matchmaking system, can give one a gage on their physical fitness level and give them goals to work up to (i.e., accumulating enough points to reach a certain tier).  Finally, with goal setting, our application tracks a user's personal best score (points accumulated within a single game).  This can give users an extra level of competition to work towards, in addition to competing against other users.  Overall, we believe that the main benefits of our game lie in our game being relevant to people of different fitness backgrounds and helping our users create or modify their fitness goals.

 * Short (2-5 min' read max)
 * We want you to "connect the dots" for us - Why does your product (as described in your answer to Q1) fits the needs of your users (as described in your answer to Q2)?
 * Explain the benefits of your product explicitly & clearly. For example:
    * Save users time (how much?)
    * Allow users to discover new information (which information? And, why couldn't they discover it before?)
    * Provide users with more accurate and/or informative data (what kind of data? Why is it useful to them?)


#### Q4: What does "DONE" means to your Team 
 * The whole team needs to agree as to what ”done” means for the features you will
   implement.
 * Definition of done applies to all userstories

----



### Highlights

YOUR ANSWER GOES HERE ...

Key Decisions

Preface
During sprint 0, our team met at least once a week to dicusss key decisions (some of the located below) that determine the blueprint of our product.  In addition to our weekly meetings, we also had in-person meetings in the university as well as text conversations through Slack and Discord.  Here are three decisions that our team discussed during these last couple of weeks:

1) Alternative Ideas - While our team already knew we wanted to build a product related to physical fitness, our original idea was to build a "one-stop shop" for workout planning.  We brainstormed multiple features for this app including but not limited to: a calorie counter, a space for users to share their workout plans, and a forum to ask gym related questions.  However, we soon noticed a couple of factors that ultimately fueled our decision to not continue with this.  First off, we realized that a lot of our features are already implemented and widely used.  For instance, Reddit provides forums that talk about gym related questions and also provides a space for users to converse with each other about their workout regimens.  Furthermore, we felt that this idea would not exactly be great in terms of originality and practical use as most users would probably stick to places like Reddit and already existing calorie counters, even after learning about what our app had to offer.  We ultimately decided to go towards a different route and develop a game based on physical fitness.  We decided to "gamify" our idea as we all agreed that people tend to be more motivated to work out when participating alongside their peers and adding a (hopefully healthy) sense of competition can provide further motivation to keep maintaining their physical health.

2) Ranked System - One dillema our team thought of during the planning process was that each person is different in terms of their fitness lifestyle (i.e., some people go to the gym fairly often to do high-intensity workouts while others may only go to the gym once a month to work on light cardio).  Our group decided to think of ways to separate these vastly different users, to understand how our global/public games will operate.  One alternative our team thought of was adding tiers to separate these users into categories.  Specifically, we were considering to divide our player base into 3 main tiers: Beginner, Intermediate, and Advanced.  However, we soon noticed that this structure could still lead to "gaps" and we felt 3 tiers would not provide the most accurate division of the user base.  Our counter-solution was to implement an "ELO" system where users are given points based on past performance and are grouped with users with similar point totals.  This way, it's more likely that an arbritary user will be grouped with user with similar points.

3) Choice of Web Framework - When our team was discussing about what technologies to use, we wanted to find applications that we felt we could learn and apply within a short period of time.  However, we also wanted to find opportunities to learn about new products and essentially, step out of our comfort zone.  We ultimately decided on three main applications: React (for the front-end), Django (for the back-end), and PostgreSQL (for the database), trying to find a balance between the two thoughts above.  For the front end, we ultimately went for React, as it's a tool commonly used in the industry and includes principles that are used in other languages such as JavaScript and HTML.  We decided to go with Django for our backend, as not a lot of us had experience with Django, which gives this project an opportunity to learn it.  Finally, we chose PostgreSQL as our database due to us already having experience with it through CSCC43.  Although we were intrigued by non-relational databases such as neo4j, we felt that using a relational database PostgreSQL would be the most practical option available.

Specify 3 - 5 key decisions and/or insights that came up during your meetings
and/or collaborative process. Here are few questions that can guide you

 * Short (5 min' read max)
 * Decisions can be related to the product and/or the team process.
    * Mention which alternatives you were considering.
    * Present the arguments for each alternative.
    * Explain why the option you decided on makes the most sense for your team/product/users.
 * Essentially, we want to understand how (and why) you ended up with your current product plan.
 * How did you organise the team? Which tools did you use, if any?
 * How frequently did you meet?
 
 
  


import React, { Component } from 'react';

import logo from '../../Assets/logo.svg';
import responseBubble from '../../Assets/response-bubble.png';

import '../../App.css';

import Summary from '../Summary/Summary';
import SamDialogue from './SamDialogue';
import UserDialogue from './UserDialogue';
import HeartBar from '../SideBar/HeartBar';
import StarBar from '../SideBar/StarBar';

var month = 0; 
var exchange = 1; 

var personality = 0;

var debug = 'hi';

var responseID1 = 'u1a';
var responseID2 = 'u1b';
var responseID3 = 'u1c';

class MainDialogue extends Component {
  constructor() {
      super()
      
      this.state={
          hideExchange1: true,
          hideExchange2: true,
          hideExchange3: true,
          hideExchange4: true,
          hideExchange5: true,
          hideExchange6: true,
          hideExchange7: true,
          hideExchange8: true,
          hideExchange9: true,
          hideExchange10: true,
          hideExchange11: true,
          hideExchange12: true,
          hideExchange13: true,
          hideExchange14: true,
          hideExchange15: true,
          hideExchange16: true,
          
          exchange1: ' ',
          exchange2: ' ',
          exchange3: ' ',
          exchange4: ' ',
          exchange5: ' ',
          exchange6: ' ',
          exchange7: ' ',
          exchange8: ' ',
          exchange9: ' ',
          exchange10: ' ',
          exchange11: ' ',
          exchange12: ' ',
          exchange13: ' ',
          exchange14: ' ',
          exchange15: ' ',
          exchange16: ' ',
          
          hideSummary0: true, 
          hideSummary6: true, 
          hideSummary12: true, 
          hideSummary18: true, 
          hideSummary24: true, 
          
          shownSummary0: false, 
          shownSummary6: false, 
          shownSummary12: false, 
          shownSummary18: false, 
          shownSummary24: false, 
          
          summary0: ' ', 
          summary6: ' ', 
          summary12: ' ', 
          summary18: ' ', 
          summary24: ' ', 
          
          props: {
            summary: this.getSummaryText,
            retryMonth: this.retryMonth,
          },
          
          userDialogue: [
            { id: ' ', text: ' '},
            { id: 'gn', text: 'Good night.'},
              
            /* ********** Month 0 *************/  
            { id: 'u1a', text: "Hey!" },
            { id: 'u1b', text: "Hello" },
            { id: 'u1c', text: "Bye." },
              
            { id: 'u2a', text: "Yeah idunno. Amanda made me get one, so here we are." },
            { id: 'u2b', text: "I thought that's what all the cool kids are doing these days o:" },
            { id: 'u2c', text: "Just wanted to be more social, y'know?" },  
              
            { id: 'u3a', text: "We're doing greatttt. Couldn't be happier..." },
            { id: 'u3b', text: "We're alright I guess." },
            { id: 'u3c', text: "Amanda's been fairly busy with med school. Haven't had much time to hang out recently." },
            
            { id: 'u3d', text: "Just a little bored these days." },  
            { id: 'u3e', text: "I'm alright I guess." },    
              
            { id: 'u3f', text: "I wouldn't say that." },
            { id: 'u3g', text: "Why of COURSE I am. :p But the more the merrier!" },
            { id: 'u3h', text: "Honestly I just wanted to connect with old friends that I don't see anymore. :)" },  
              
            { id: 'u4a', text: "Nah, it's okay." },
            { id: 'u4b', text: "Amanda's been fairly busy with med school. Haven't had much time to hang out recently." },
            { id: 'u4c', text: "Yeah... she's been in a bad mood too as of late." },
            { id: 'u4c2', text: "Amanda's been in a bad mood as of late." },
            { id: 'u4d', text: "It'll be worth it once she's done. It's just hard to deal with in the meantime..." },
            { id: 'u4d2', text: "Yeah..." },  
            { id: 'u4e', text: "Yeah that's a good idea. We should go together some time." },
            { id: 'u4f', text: "Yooo we should go! We can get super fit and toned together." },
            { id: 'u4g', text: "No thanks." },
            { id: 'u4h', text: "Aww don't say that. That kind of lifestyle isn't for everyone." },
            { id: 'u4i', text: "You'd think that after being friends for half a decade that my charisma would've rubbed off on you by now..." },
            { id: 'u4j', text: "Sounds about right." },
            { id: 'u4k', text: "Nahh I'm good." },
            { id: 'u4l', text: "Always thought it was kind of lame." },  
              
            { id: 'u5a', text: "Yeah, I agree :)" },
            { id: 'u5b', text: "I've missed talking to you, too." },
            { id: 'u5c', text: "Eh, you're alright I guess." },  
              
            { id: 'u6a', text: "Enough about me though. How're you doing?" },
            
            /* ********** Month 6 *************/ 
            { id: 'u7a', text: "What's up, Sammio?" },
            { id: 'u7b', text: "Hey, Sam :)" },
            { id: 'u7c', text: "Yo" },  
              
            { id: 'u8a', text: "How are you?" },
            { id: 'u8b', text: "Are you ok?" },
            { id: 'u8c', text: "You don't sound too happy..." },  
            
            // Nice 
            { id: 'u9a', text: "Do you want to talk about it?" },
            { id: 'u9b', text: "Oh no, I'm sorry to hear that." },
            { id: 'u9c', text: "Isn't your job going well? Why are you even sad?" },  
            
            // Silly
            { id: 'u9d', text: "Aww... Do you want to talk about it?" },
            { id: 'u9e', text: "Yikes. Chin up, buddy. Don't be so down!" },
            { id: 'u9f', text: "Isn't your job paying you good $$$? Why are you even sad?" },  
            
            // Sarcastic 
            { id: 'u9g', text: "Do you want to talk about it?" },
            { id: 'u9h', text: "Lol. That sucks." },
            { id: 'u9i', text: "Aren't you getting paid well at your job? What's your problem?" },  
              
            { id: 'u10a', text: "Don't worry about that. It's no bother at all. :)" },
            { id: 'u10b', text: "If you don't want to talk then that's fine. I don't push you." },
            { id: 'u10c', text: " " },  
              
            { id: 'u11a', text: "By sleeping forever, are you possibly talking about suicide...? :/" },
            { id: 'u11b', text: "Have you tried talking to him about how stressed you are?" },
            { id: 'u11c', text: " " },  
              
            { id: 'u12a', text: "Isn't there anything else that you can do?" },
            { id: 'u12b', text: "Have you tried looking for another job?" },
            { id: 'u12c', text: "Dang... I can't even imagine. No matter what happens though, nothing is worth taking your life over. I know you can get through this. I can help :)" },  
              
            { id: 'u13a', text: "Follow your dreams! I remember your singing voice, it was great. I'm sure you'll make it out there. :)" },
            { id: 'u13b', text: "You could always do singing on the side or perform at local places for fun?" },
            { id: 'u13c', text: "There you go! You can start applying tonight. :D" },  
            { id: 'u13d', text: "Yeah, and then you can tell your boss that he sucks and walk right out!" },  
    
            /* ********** Month 12 - Dream Arc *************/
            { id: 'u14aD', text: "What's up?" },
            { id: 'u14bD', text: "Hello to you too." },
            { id: 'u14cD', text: "How're you feeling today?" },  
              
            { id: 'u15aD', text: "Maybe have another job in addition to singing?" },
            { id: 'u15bD', text: "I'm sure you'll get an acceptance sooner or later. Keep trying." },
            { id: 'u15cD', text: " " },  
              
            { id: 'u16aD', text: "I know it's hard, but putting it off won't help. Maybe take a small break and try again?" },
            { id: 'u16bD', text: "Well... I guess it's fine if you're not feeling well today. Maybe try again tomorrow?" },
            { id: 'u16cD', text: "Sam, you can't just lay there and do nothing. That won't help anyone. Go do your work." },  
              
            { id: 'u17aD', text: "Wanna meet up at a coffee shop somewhere? I have some work to do too. We can work together." },
            { id: 'u17bD', text: "Go Sam, go! I know you can do it!!" },
            { id: 'u17cD', text: "No maybes. Promise me you will." },
            { id: 'u17dD', text: "That's up to you, you're an adult now." }, 
            { id: 'u17eD', text: "That's right." }, 
            { id: 'u17fD', text: "K lol.." },
            { id: 'u17gD', text: "Fine lol, suit yourself." }, 
            
            /* ********** Month 12 - New Job Arc *************/
            { id: 'u14aN', text: "Hey. What's up?" },
            { id: 'u14bN', text: "Sammmmmmmmmmmmmm." },
            { id: 'u14cN', text: "How're you feeling?" },  
              
            { id: 'u15aN', text: "Have you tried looking into ways to improve your design skills?" },
            { id: 'u15bN', text: "I'm sure you'll get an acceptance sooner or later. Keep trying." },
            { id: 'u15cN', text: " " },  
              
            { id: 'u16aN', text: "I know it's hard, but putting it off won't help. Try taking a small break and going at it again?" },
            { id: 'u16bN', text: "Well... I guess it's fine if you're not feeling well. Maybe try again tomorrow?" },
            { id: 'u16cN', text: "Sam, you can't just do nothing. You want a better job, right? Go do your work." },  
            
            /* ********** Month 12 - New Job Arc *************/
            { id: 'u17a', text: "Wanna meet up at a coffee shop somewhere? I have some work to do too. We can work together." },
            { id: 'u17b', text: "Go Sam, go! I know you can do it!!" },
            { id: 'u17c', text: "No maybes. Promise me you will." },
            { id: 'u17d', text: "That's up to you, you're an adult now." }, 
            { id: 'u17e', text: "That's right." }, 
            { id: 'u17f', text: "K lol.." },
            { id: 'u17g', text: "Fine lol, suit yourself." }, 
              
            /* ********** Month 18 *************/
            { id: 'u18a', text: "What's wrong?" }, 
            { id: 'u18b', text: "What do you mean?" },
            
            { id: 'u19a', text: "Oh no... do you want to talk about it?" },   
            { id: 'u19b', text: "If you don't mind me asking though... have you considered professional help? It sounds like you have depression." }, 
              
            { id: 'u20a', text: "I'll keep up the good work then to keep you happy." }, 
            { id: 'u20b', text: "Yeah. I can tell you've been really sad, but honestly it's been stressing me out too. I'm sorry, but can you talk to someone else about your problems from now on?" }, 
            { id: 'u20c', text: "I'm glad that talking to me has been helping you, but I really think you should seek out professional help. I know it's not easy, but I'm not a trained professional so I can't be the only person you talk to." }, 
              
            { id: 'u21a', text: "I'm sure you can find them on your own." }, 
            { id: 'u21b', text: "I'd love to." }, 
       
            /* ********** Month 24 *************/ 
            { id: 'u22badA', text: "What's the matter?" }, 
            { id: 'u22badB', text: "Feeling sad again?" }, 
            
            { id: 'u22goodA', text: "Of course! I'll always be here for you." }, 
            { id: 'u22goodB', text: "I'm glad to hear that it's working out for you!" }, 
             
          ],
          
          samDialogue: [
            /* ********** Month 0 *************/ 
            { id: 's1a', text: "Hi!! Glad to see you're on Bookface! I thought you weren't big on social media?" },
            { id: 's1b', text: "Hey. :) Glad to see you're on Bookface! I thought you weren't big on social media?" },
            { id: 's1c', text: "HAHA. That's a good one. We just started talking! Glad to see you're on Bookface though. I thought you weren't big on social media?" },
            
            { id: 's2a', text: "Oh yeah, you guys are still dating, right? How's that going?" },
            { id: 's2b', text: "Yeah, maybe the cool kids a few years ago haha." },
            { id: 's2b2', text: "How're you doing?" },
            { id: 's2c', text: "Seriously? But you're like the most popular person I know!" },
              
            { id: 's3a', text: "Mhmmmmm... that doesn't sound very convincing though. :( Do you want to talk about it?" },
            { id: 's3b', text: "Oh... I see :( What's the matter? Do you want to talk about it?" },
            { id: 's3c', text: "Ah I see... Yeah. I've heard from my friends that med school's a pain in the butt." },
            { id: 's3c2', text: "One friend of mine doesn't even have time to eat proper meals. She just studies all day... sounds like torture." },
            { id: 's3d', text: "Oh yeah? You should pick up a hobby... like jogging! I've been wanting to get into it recently but I've just been so unmotivated lol." },
            { id: 's3e', text: "Oh... I see :( What's the matter? Do you want to talk about it?" },
            { id: 's3f', text: "You're too modest. I'm like 1000 times more antisocial than you haha." }, 
            { id: 's3g', text: " Geez, this guy... LOL. Share some of your extroversion with the rest of us introverts, will ya? " },
            { id: 's3h', text: "Yeah I'm surprised it took you so long to make a Bookface. Even someone as antisocial as me has one. " },
        
            { id: 's4a', text: "If you say so... you can always talk to me if you need anything. I've missed talking to you. We should seriously catch up some time :)" },
            { id: 's4b', text: "Oh I think you told me about it the last time we talked. I'm sorry to hear that... if you need to talk though, let me know! We should seriously catch up some time, I've missed talking to you." },
            { id: 's4c', text: "Mmm, I see... I'm sorry to hear that. If you need to talk though, let me know! We should seriously catch up some time, I've missed talking to you." },  
            { id: 's4d', text: "That'd be nice. I'd love that. :)" },
            { id: 's4all', text: "This is nice though. It's been a while since we've talked." },  
            { id: 's4e', text: "Aww yeah haha. Can't wait to get that dream bod. " },
            { id: 's4f', text: "Welp, I was just making a suggestion lol. You can take it or leave it. " },  
            { id: 's4g', text: "I guess so. >_< Thanks... I really should stop obsessing over that sort of thing... being popular and all. " },
            { id: 's4h', text: "OMG this guy!! LOL. Don't make me smack you the next time we meet. >:o Jk. " },
            { id: 's4i', text: "H a h a. No need to be a jerk about it, sir. Not everyone can be born as 'charming' as you. >:P " },  
            { id: 's4j', text: "...kay. LOL. " },  
            { id: 's4k', text: "Wow lol... too cool for one of the hottest social media platforms in recent years, huh? I see you." },  
              
            { id: 's5a', text: "Hehe" },
            { id: 's5b', text: "Aww shucks, you're too kind. " },
            { id: 's5c', text: "This guy lol..." },
              
            { id: 's6a', text: "Oh me? Haha. I'm doing alright I guess. Been feeling a little blue lately, but it happens. It'll probably go away in a few days. :)" },
            { id: 's6b', text: "I'm getting super sleepy though, so I'm probably gonna go to bed. Good night! " },
            
            /* ********** Month 6 *************/ 
            { id: 's7a', text: "Oh, hey Quinn... " },
            
            { id: 's8a', text: "Meh... Been better, honestly. Feeling kinda down lately..." },
            { id: 's8b', text: "Meh... I'm aite. Could be better, but y'know how it goes. Just watching some YouTube videos right now." },
            
            { id: 's9a', text: "Idunno... I wouldn't want to bother you with it..." },
            { id: 's9b', text: "Yeah... haha... " },
            { id: 's9c', text: "Welp, hope you feel better!!" },  
            
            { id: 's10a', text: "Mm... >_< If you say so... I guess I shouldn't doubt you considering we've been friends since freshman year." },
            { id: 's10b', text: "It's not that I don't want to talk... >_< " },   
            { id: 's10a2', text: "I just... I don't know why I've been feeling so down lately. I guess one thing that's bothering me is my job. It's always been really boring, but lately it's been even worse." },
            { id: 's10a3', text: "I always have loads of stuff on my plate and my boss doesn't seem like he cares that I'm suffering." },
            { id: 's10a4', text: "There's so much going on and I'm just super overwhelmed. Doesn't seem like things will get any better. Sometimes I just want to sleep forever..." },
            { id: 's10c', text: "Mhmm... thanks though. " },  
              
            { id: 's11a', text: "I can't lie and say that it's never crossed my mind... but I don't think I'm at that point yet. Lol. It wouldn't even be as bad if they paid me decently. " }, 
            { id: 's11a2', text: "Maybe if I wasn't such a failure, I'd be able to handle the work they're giving me... and that way, they'd give me a higher salary. " },
            { id: 's11b', text: "Oh believe me, I've tried. He just doesn't care, lol. Like. I could drop dead tomorrow and he literally would just find another person to replace me." },
            { id: 's11b2', text: "Maybe if I wasn't such a failure, I'd be able to handle the work he's giving me... " },
            { id: 's11c', text: " " },  
              
            { id: 's12a', text: "Idk if you remember, but my dream's always been to be a singer. The industry's super competitive though lol and if I don't make it, I won't be able to pay the bills." },
            { id: 's12b', text: "Eh not really... I guess that'd be a good place to start. I'm sure any place is better than here. " },
            { id: 's12c', text: "Yeah. I know... thanks :( It's just... really hard to find the motivation to keep going sometimes, yknow?" },  
            { id: 's12c2', text: "I appreciate you reaching out to me though. It's been a while since someone actually cared about me." },  
            { id: 's12c3', text: "First thing's first, I gotta get outta my job x_x" },  
              
            { id: 's13a', text: "Maybe I'll go and quit tomorrow!! Show him who's boss. >:D" },
            { id: 's13a2', text: "Just kidding... lol. >< I'll try to work out my performance anxiety and practice at some local events first though. Thanks for encouraging me, Quinn. :) I appreciate it." },
            { id: 's13b', text: "Yeah I guess... It won't be the same as performing full-time but at least it'll help out my performance anxiety. Maybe then, I'll quit my stupid job and make it with the big boys and girls lol." },
            { id: 's13b2', text: "Thanks for the advice, Quinn. I appreciate it." },
            { id: 's13c', text: "LOLLL yeah I wish I had the guts to do that. " },  
            { id: 's13c2', text: "While I'm working up the courage for that, I'll at least try to apply to some other graphic design jobs. " },  
            { id: 's13c3', text: "Thanks for your encouragement, Quinn. :) I really appreciate it. " },  
            { id: 's13d', text: "Oof yeah. I was gonna play some video games, but I'll do this first. Maybe I'll aim for like 5 applications a night...? Ugh that's gonna be a pain. " },  
            { id: 's13d2', text: "Thanks for your encouragement though, Quinn. :) I really appreciate it." },  
            { id: 's13all', text: "Anyway, I'm gonna try to catch some zzz's. Sigh >< Talk to you later!" },
            
            /* ********** Month 12 - Dream Arc *************/
            { id: 's14preD', text: "Sigh. Sigh sigh sigh sigh sigh. " },
            { id: 's14aD', text: "Stressingggggggg. Everything sucks. I just got rejected from another venue... How am I supposed to start a music career when no one's willing to give me a chance? " },
            { id: 's14bD', text: "... Hey Quinn. :( I'm sorry... I'm just really stressed right now. Got rejected from another venue. Why can't I find a place that wants me to perform...?" },
            { id: 's14cD', text: "Pretty bad honestly lol... I just got rejected from another venue. How am I supposed to start a music career when no one's willing to give me a chance?" },
              
            { id: 's15aD', text: "I guess I'll have to do that if I want to sustain myself... Oof. Maybe I should've kept to my old job and not gotten my hopes up." },
            { id: 's15bD', text: "I guess so. It's just... how am I supposed to believe that I'm a good singer if no one's letting me sing for them? Ugh I can't do it... I can't keep applying to these venues only to get rejected again." },
            { id: 's15allD', text: "I just want. To sleep. And do nothing. Sigh... " },
              
            /* ********** Month 12 - New Job Arc *************/
            { id: 's14preN', text: "Quinnnnnnnnnnnnnnn." },
            { id: 's14aN', text: "Stressing. Everything sucks, as usual. I must've applied to like 50 companies by now, but I haven't heard back from any of them. " },
            { id: 's14bN', text: "Help meeeee. Everything sucks, as usual. I must've applied to like 50 companies by now, but I haven't heard back from any of them." },  
            { id: 's14cN', text: "Terrible, as usual. Hehe. Sigh. I must've applied to like 50 companies by now, but I haven't heard back from any of them." },
            { id: 's14allN', text: "Things haven't even gotten better at my current workplace. Geez, where do I begin. Got chewed out by my boss first thing this the morning because of a mistake that I made. Feeling pretty worthless right about now..." },
            { id: 's14all2N', text: "Why do I even bother coming into work? It's not even like the things I'm doing are making a difference. Sigh. I brought home work to do but I'm stuck. Ahhhh. " },
            
            { id: 's15aN', text: "I guess that would make sense if I wanted to do well at my job... but I don't like graphic design in general so I really don't feel like it." },
            { id: 's15bN', text:  "It's hard to believe that when I haven't even gotten a single interview yet. :( " },
            { id: 's15allN', text: "I just want. To sleep. And do nothing. Sigh... I feel awful. " },
            
            /* ********** Month 12 - Both *************/
            { id: 's16a', text: "Yeah... you're right. Ughhhhh. I'm just in bed right now lol. Too lazy to get up. " },
            { id: 's16b', text: "Yeah. I'll... try again tomorrow. Hehe... Maybe." },
            { id: 's16c', text: "... Ughhhh. Fineee... I'll go do it." },
              
            { id: 's17a', text: "Sigh... Okayy. Yeah, sure. That sounds like a good idea. ;_;" },
            { id: 's17a2', text: "Anyway, I'll get changed and meet you at Starbucks I guess? See ya!" },
            { id: 's17b', text: "Yup...! I can do it... " },
            { id: 's17c', text: "Sigh... Okay. I promise... >< " },
            { id: 's17d', text: "Yes, yes, smartie pants. I am an adult. Thanks for pointing that out. Alright, I'll do it tomorrow, sheeesh." },
            { id: 's17e', text: "... This guyyy... What a smart aleck." },
            { id: 's17all', text: "Anyway, I'm going to bed. Good night. " },
            
            /* ********** Month 18 *************/
            { id: 's18pre', text: "Quinn... Help me." },
            { id: 's18pre2', text: "I don't think I can keep this up." },
              
            { id: 's18a', text: "I'm so miserable. I feel like nothing I'm doing is working... I'm just so worthless. And I can't do anything about it. " },
            
            { id: 's19a', text: "Yeah. I mean. It's the same thing that I've been struggling with for the past year, but I just feel like a failure...  " },
            { id: 's19b', text: "Yeah, I mean. I've thought about it before, but idk. I don't think that's for me. Like. Sure, I'm sad, but I don't think it's bad enough that I REALLY need to go. Talking to you has been helping me a lot." },
            { id: 's19b2', text: "Seriously, thanks for helping me. Sorry if I can be difficult sometimes. It's just... been really hard. I don't know what I'd do without you, Quinn." },
              
            { id: 's20a', text: "Thanks, Quinn! You're the best. I'm so glad we're finally getting close again." },
            { id: 's20a2', text: "I'm going to bed though, talk to you later." },
            { id: 's20b', text: "Oh... I didn't realize. I'm sorry... Yeah, I don't really know what to say. I'm sorry to have burdened you. Don't worry, I won't bother you with these problems from now on. " },
            { id: 's20c', text: "Mmm... I guess you're right. I shouldn't be pushing all my problems onto you. " },
            { id: 's20c2', text: "I'm sorry if it's been feeling like that. I'll... I'll look into some counseling places. :T Would you mind helping me?" },
            
            { id: 's21a', text: "Oh, right. Yeah. I'm sure you must have your own issues to worry about too. Don't worry, I think I can find something." },
            { id: 's21a2', text: "I'm going to look into it a bit, then sleep. G'night." },
            { id: 's21b', text: "Thanks, Quinn... Thanks for helping me through this. " },
            { id: 's21b2', text: "I'm going to look into some places, then sleep. G'night. " },
            
            /* ********** Month 24 *************/
            { id: 's22pre-bad', text: "Ah, hey... Are you free to talk? Hating everything right now... " },
            { id: 's22pre-good', text: "Hey. I just wrapped up my 7th session with my counselor. She told me that it's important to be thankful for the good things in my life, so. I just wanted to say thank you. " },
            { id: 's22pre-good2', text: "Like seriously. Thank you so much for encouraging me to go get help. It's helped a lot just being able to talk through everything that I'm struggling with and learning strategies for how to handle my anxiety. " },
              
            { id: 's22bad', text: "Yeah... I don't know where to even begin... " },
            
            { id: 's22good', text: "Thank you so much." },
            { id: 's22good2D', text: "Also wanted to let you know that I got another singing gig this weekend!!" },
            { id: 's22good2N', text: "I've also really been enjoying my new graphic design job. Maybe I'll see if I can get some singing gigs on the weekends." },
            { id: 's22good3', text: "I think things are really shaping up, and I just can't stress enough how much you helped in getting me here. :) " },
            { id: 's22good4', text: "I know my depression might come back, but at least now I know how to manage my emotions. It's never the end. " },
            { id: 's22good5', text: "From the bottom of my heart, thank you." },
            
          ],
          
          summaryText: [
            { id: 'm0-nice', text: "Based on your responses, your personality has been established as 'Nice.' Sam will feel more comfortable opening up to you without fear of judgment. You will start the game with 3 affection hearts." },
            { id: 'm0-silly', text: "Based on your responses, your personality has been established as 'Silly.' Sam will have mixed feelings opening up to you. Knowing when to be serious and when to be playful will be key for gaining her trust. You will start the game with 2 affection hearts." },
            { id: 'm0-sarcastic', text: "Based on your responses, your personality has been established as 'Sarcastic.' Sam will feel more reserved when speaking to you due to your borderline mean nature. Being nicer is key to gaining her trust. You will start the game with 1 affection hearts." },
            { id: 'm0-default', text: "Great job, you've completed the first month of iComforter! From here on out, time will pass by in 6 month intervals. You will start off with 3 affection hearts."},
              
            { id: 'm6-end1', text: "You asked Sam why she's sad, but in a way that makes her feel bad about her own feelings. She feels as though you're judging her for feeling this way, and she does not feel comfortable to continue the conversation. You and Sam share some small chit-chat for the next few days, but you don't hear from Sam after that. <br/>You failed to help Sam. Next time, you should offer your support and ask her to open up about how she feels without belittling her. <br/>Game over." },
            { id: 'm6-end2', text: "You did not prompt Sam to open up about her feelings. She feels as though your comment was just empty words, and does not feel your concern. You and Sam share some small chit-chat for the next few days, but you don't hear from Sam after that. <br/>You failed to help Sam. Next time, you should offer your support and ask her to open up about how she feels. <br/>Game over." },
            { id: 'm6-good', text: "You asked Sam what's wrong. Good job! She may not have spoken to anyone about her concerns, so it was the right choice for you to get her to open up and talk about how she feels. It was also good that you asked her about her suicidal comment, as this is something you should always take seriously. You and/or Sam should contact her general practioner and inform them that she is having suicidal thoughts." },
            { id: 'm6-ok', text: "You asked Sam what's wrong. Good job! She may not have spoken to anyone about her concerns, so it was the right choice for you to get her to open up and talk about how she feels. Be cautious of when she talks about 'sleeping forever' as this is a red flag for suicide. You and/or Sam should contact her general practioner and inform them that she is having suicidal thoughts." },
            
            { id: 'm12-end1', text: "You did not properly encourage Sam, and have let her succumb to her own demotivation due to her depression. You and Sam share some small chit-chat for the next few days, but you don't hear from Sam after that. <br/>You failed to help Sam. Next time, you should be kinder in your words and push her to overcome her letharagy. <br/>Game over. " },
            { id: 'm12-good', text: "You encouraged Sam. Good job! Allowing Sam to give up here would not help her out in the long-run, so it's good that you motivated her to not fall behind on her applications. <br/>Also, great job encouraging her in a kind and gentle manner! Using kind, non-threatening vocabulary is key to fostering a safe environment for Sam to open up to you. By giving Sam gentle encouragement and suggesting ways of destressing like taking breaks or working with a friend, this helps Sam help herself." },
            { id: 'm12-better', text: "You encouraged Sam. Good job! Allowing Sam to give up here would not help her out in the long-run, so it's good that you motivated her to not fall behind on her applications. <br/>Remember to continue using kind, non-threatening vocabulary to foster a safe environment for Sam to open up to you. By giving Sam gentle encouragement and suggesting ways of destressing like taking breaks or working with a friend, this helps Sam help herself." },
            { id: 'm12-ok', text: "You encouraged Sam. Good job! Allowing Sam to give up here would not help her out in the long-run, so it's good that you motivated her to not fall behind on her applications. <br/>However, Sam might have taken offense by the way you encouraged her. Remember to use kind, non-threatening vocabulary to foster a safe environment for Sam to open up to you. By giving Sam gentle encouragement and suggesting ways of destressing like taking breaks or working with a friend, this helps Sam help herself." },
              
            { id: 'm18-end1', text: "You did not suggest professional help to Sam. Although your support has been helping her recently, it's crucial that she seeks out professional help as well. Your chats with her are starting to cause you emotional strain, so you shouldn't ignore your own feelings just because you want to help your friend. It is important to establish emotional boundaries with a depressed friend so you can help them while also helping yourself. <br/>You and Sam repeat the same type of conversation over and over for the next few weeks before the conversation sizzles out and you two stop talking. <br/>Game over." },
            { id: 'm18-end2', text: "You lashed out and failed to establish emotional boundaries with Sam. Although establishing emotional boundaries are important, this was not the way to do so. There is a difference between establishing boundaries while providing support and simply driving the depressed person away. In this case, you did the latter. <br/>You failed to help Sam. She no longer feels comfortable talking to you about her problems. <br/>Game over. " },
              
            { id: 'm24-BadEnding', text: "You failed to help Sam. Through your enabling behavior, Sam was not able to seek out professional help. You also did not set your emotional boundaries with her. Although you meant well, your actions did not help Sam in the long-run. " },
            { id: 'm24-GoodEnding', text: "You've helped Sam! Throughout this experience, you have managed to suggest professional help, establish emotional boundaries and offer your support to your depressed friend. Hopefully you have learned a thing or two about how to go about helping a person with depression while also maintaining your own health. <br/>Congrats! Feel free to try out different paths." },
           
          ],
      }
  } 
    
  getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
    
  populateResponses(a, b, c) { 
      var random = this.getRandomInt(3);
      
      if(random === 0) {
        responseID1 = a;
        responseID2 = b;
        responseID3 = c;
      } else if(random === 1) {
        responseID1 = c;
        responseID2 = a;
        responseID3 = b;
      } else if(random === 2) {
        responseID1 = b;
        responseID2 = c;
        responseID3 = a;
      }
      
      exchange++;
  }
  
  getUserDialogue(id) {
      return this.state.userDialogue.find(x => x.id === id).text;
  }    
    
  getSamDialogue(id) {
      return this.state.samDialogue.find(x => x.id === id).text;
  }    
    
  getSummaryText(id) {
      return this.state.summaryText.find(x => x.id === id).text;
  }
    
  changeDialogueState(entry) {
      if(exchange === 1) {
        if(entry === 'u1a') {
          this.setState({
            hideExchange1: false,
            exchange1: 'u1a',
          })  
          personality++;
        } else if(entry === 'u1b') {
          this.setState({
            hideExchange1: false,
            exchange1: 'u1b',
          })  
          personality++; 
        } else if(entry === 'u1c') {
          this.setState({
            hideExchange1: false,
            exchange1: 'u1c',
          })  
        } 
        this.populateResponses('u2a', 'u2b', 'u2c');
      } else if (exchange === 2) {
        if(entry === 'u2a') {
          this.setState({
            hideExchange2: false,
            exchange2: 'u2a',
          })  
          this.populateResponses('u3a', 'u3b', 'u3c');
        } else if(entry === 'u2b') {
          this.setState({
            hideExchange2: false,
            exchange2: 'u2b',
          })  
          this.populateResponses('u3d', 'u3e', 'u3c');    
        } else if(entry === 'u2c') {
          this.setState({
            hideExchange2: false,
            exchange2: 'u2c',
          })  
          this.populateResponses('u3f', 'u3g', 'u3h');
        } 
      } else if (exchange === 3) {
        if(entry === 'u3a') {
          this.setState({
            hideExchange3: false,
            exchange3: 'u3a',
          })  
          this.populateResponses('u4a', 'u4b', 'u4c2');    
        } else if(entry === 'u3b') {
          this.setState({
            hideExchange3: false,
            exchange3: 'u3b',
          })  
          this.populateResponses('u4a', 'u4b', 'u4c2');   
        } else if(entry === 'u3c') {
          this.setState({
            hideExchange3: false,
            exchange3: 'u3c',
          })  
          this.populateResponses('u4c', 'u4d', 'u4d2'); 
        } else if (entry === 'u3d') {
          this.setState({
            hideExchange3: false,
            exchange3: 'u3d',
          })  
          this.populateResponses('u4e', 'u4f', 'u4g'); 
        } else if (entry === 'u3e') {
          this.setState({
            hideExchange3: false,
            exchange3: 'u3e',
          })  
          this.populateResponses('u4a', 'u4b', 'u4c2');
        } else if (entry === 'u3f') {
          this.setState({
            hideExchange3: false,
            exchange3: 'u3f',
          })  
          this.populateResponses('u4h', 'u4i', 'u4j');
        } else if (entry === 'u3g') {
          this.setState({
            hideExchange3: false,
            exchange3: 'u3g',
          })  
          personality++;
          this.populateResponses('u4h', 'u4i', 'u4k');
        } else if (entry === 'u3h') {
          this.setState({
            hideExchange3: false,
            exchange3: 'u3h',
          })  
          personality+=2;
          this.populateResponses('u4h', 'u4i', 'u4l');
        }
      } else if (exchange === 4) {  
        if(entry === 'u4a') {
          this.setState({
            hideExchange4: false,
            exchange4: 'u4a',
          })   
        } else if(entry === 'u4b') {
          this.setState({
            hideExchange4: false,
            exchange4: 'u4b',
          })   
        } else if(entry === 'u4c') {
          this.setState({
            hideExchange4: false,
            exchange4: 'u4c',
          })   
        } else if(entry === 'u4c2') {
          this.setState({
            hideExchange4: false,
            exchange4: 'u4c2',
          })   
        } else if(entry === 'u4d') {
          this.setState({
            hideExchange4: false,
            exchange4: 'u4d',
          })   
        } else if(entry === 'u4d2') {
          this.setState({
            hideExchange4: false,
            exchange4: 'u4d2',
          })   
        } else if(entry === 'u4e') {
          this.setState({
            hideExchange4: false,
            exchange4: 'u4e',
          })   
        } else if(entry === 'u4f') {
          this.setState({
            hideExchange4: false,
            exchange4: 'u4f',
          })   
        } else if(entry === 'u4g') {
          this.setState({
            hideExchange4: false,
            exchange4: 'u4g',
          })   
        } else if(entry === 'u4h') {
          this.setState({
            hideExchange4: false,
            exchange4: 'u4h',
          })   
        } else if(entry === 'u4i') {
          this.setState({
            hideExchange4: false,
            exchange4: 'u4i',
          })   
        } else if(entry === 'u4j') {
          this.setState({
            hideExchange4: false,
            exchange4: 'u4j',
          })   
        } else if(entry === 'u4k') {
          this.setState({
            hideExchange4: false,
            exchange4: 'u4k',
          })   
        } else if(entry === 'u4l') {
          this.setState({
            hideExchange4: false,
            exchange4: 'u4l',
          })   
        }
        this.populateResponses('u5a', 'u5b', 'u5c');
      } else if (exchange === 5) {
        if(entry === 'u5a') {
          this.setState({
            hideExchange5: false,
            exchange5: 'u5a',
          })   
        } else if(entry === 'u5b') {
          this.setState({
            hideExchange5: false,
            exchange5: 'u5b',
          })   
        } else if(entry === 'u5c') {
          this.setState({
            hideExchange5: false,
            exchange5: 'u5c',
          })   
        }
        this.populateResponses('u6a', ' ', ' '); 
      } else if (exchange === 6) {
        if(entry === 'u6a') {
          this.setState({
            hideExchange6: false,
            exchange6: 'u6a',
          })  
          this.populateResponses(' ', 'gn', ' ');      
        }
      } else if (exchange === 7) {
        if(entry === 'gn') {
          this.setState({
            hideSummary0: false,   
          })
        }
      }
  }
    
  toggleResponse1() {
      this.changeDialogueState(responseID1); 
  }
  toggleResponse2() {
      this.changeDialogueState(responseID2); 
  }
  toggleResponse3() {
      this.changeDialogueState(responseID3); 
  }
    
  retryMonth = (month) => {
      if(month === 0) {
          this.setState({
            hideExchange1: true,
            hideExchange2: true,
            hideExchange3: true,
            hideExchange4: true,
            hideExchange5: true,
            hideExchange6: true,
            hideExchange7: true,
              
            hideSummary0: true,
          })
          exchange = 1; 
          month = 0; 

          responseID1 = 'u1a';
          responseID2 = 'u1b';
          responseID3 = 'u1c';
      }
  }
    
  render() {
    return (
        <div>
          <div className="Dialogue-main">
            <div className="Side-bar-container">
              <HeartBar/>
              <StarBar/>
            </div>
            <div className="Box">
              <div className="Box-content" id="Dialogue">
                  {/* ********************************************************************************** */}
                  {/* ***********************************  MONTH 0 ************************************* */}
                  {/* ********************************************************************************** */}
                  <SamDialogue dialogue="Hey Quinn!"/>

                  {!this.state.hideExchange1 && <UserDialogue dialogue={this.getUserDialogue(this.state.exchange1)}/>}
        
                  {!this.state.hideExchange1 && this.state.exchange1 === 'u1a' && <SamDialogue dialogue={this.getSamDialogue('s1a')}/>} 
                  {!this.state.hideExchange1 && this.state.exchange1 === 'u1b' && <SamDialogue dialogue={this.getSamDialogue('s1b')}/>} 
                  {!this.state.hideExchange1 && this.state.exchange1 === 'u1c' && <SamDialogue dialogue={this.getSamDialogue('s1c')}/>} 
        
                  {!this.state.hideExchange2 && <UserDialogue dialogue={this.getUserDialogue(this.state.exchange2)}/>}
                   
                  {!this.state.hideExchange2 && this.state.exchange2 === 'u2a' && <SamDialogue dialogue={this.getSamDialogue('s2a')}/>} 
                  {!this.state.hideExchange2 && this.state.exchange2 === 'u2b' && <SamDialogue dialogue={this.getSamDialogue('s2b')}/>} 
                  {!this.state.hideExchange2 && this.state.exchange2 === 'u2b' && <SamDialogue dialogue={this.getSamDialogue('s2b2')}/>} 
                  {!this.state.hideExchange2 && this.state.exchange2 === 'u2c' && <SamDialogue dialogue={this.getSamDialogue('s2c')}/>} 
                   
                  {!this.state.hideExchange3 && <UserDialogue dialogue={this.getUserDialogue(this.state.exchange3)}/>}
                   
                  {!this.state.hideExchange3 && this.state.exchange3 === 'u3a' && <SamDialogue dialogue={this.getSamDialogue('s3a')}/>} 
                  {!this.state.hideExchange3 && this.state.exchange3 === 'u3b' && <SamDialogue dialogue={this.getSamDialogue('s3b')}/>} 
                  {!this.state.hideExchange3 && this.state.exchange3 === 'u3c' && <SamDialogue dialogue={this.getSamDialogue('s3c')}/>} 
                  {!this.state.hideExchange3 && this.state.exchange3 === 'u3c' && <SamDialogue dialogue={this.getSamDialogue('s3c2')}/>} 
                  {!this.state.hideExchange3 && this.state.exchange3 === 'u3d' && <SamDialogue dialogue={this.getSamDialogue('s3d')}/>} 
                  {!this.state.hideExchange3 && this.state.exchange3 === 'u3e' && <SamDialogue dialogue={this.getSamDialogue('s3e')}/>} 
                  {!this.state.hideExchange3 && this.state.exchange3 === 'u3f' && <SamDialogue dialogue={this.getSamDialogue('s3f')}/>} 
                  {!this.state.hideExchange3 && this.state.exchange3 === 'u3g' && <SamDialogue dialogue={this.getSamDialogue('s3g')}/>} 
                  {!this.state.hideExchange3 && this.state.exchange3 === 'u3h' && <SamDialogue dialogue={this.getSamDialogue('s3h')}/>} 
                  
                  
                  {!this.state.hideExchange4 && <UserDialogue dialogue={this.getUserDialogue(this.state.exchange4)}/>}
                   
                  {!this.state.hideExchange4 && this.state.exchange4 === 'u4a' && <SamDialogue dialogue={this.getSamDialogue('s4a')}/>}
                  {!this.state.hideExchange4 && this.state.exchange4 === 'u4b' && <SamDialogue dialogue={this.getSamDialogue('s4b')}/>}
                  {!this.state.hideExchange4 && this.state.exchange4 === 'u4c' && <SamDialogue dialogue={this.getSamDialogue('s4c')}/>}
                  {!this.state.hideExchange4 && this.state.exchange4 === 'u4c2' && <SamDialogue dialogue={this.getSamDialogue('s4c')}/>}
                  {!this.state.hideExchange4 && this.state.exchange4 === 'u4d' && <SamDialogue dialogue={this.getSamDialogue('s4d')}/>}
                  {!this.state.hideExchange4 && this.state.exchange4 === 'u4e' && <SamDialogue dialogue={this.getSamDialogue('s4e')}/>}
                  {!this.state.hideExchange4 && this.state.exchange4 === 'u4f' && <SamDialogue dialogue={this.getSamDialogue('s4e')}/>}
                  {!this.state.hideExchange4 && this.state.exchange4 === 'u4g' && <SamDialogue dialogue={this.getSamDialogue('s4f')}/>}
                  {!this.state.hideExchange4 && this.state.exchange4 === 'u4h' && <SamDialogue dialogue={this.getSamDialogue('s4g')}/>}
                  {!this.state.hideExchange4 && this.state.exchange4 === 'u4i' && <SamDialogue dialogue={this.getSamDialogue('s4h')}/>}
                  {!this.state.hideExchange4 && this.state.exchange4 === 'u4j' && <SamDialogue dialogue={this.getSamDialogue('s4i')}/>}
                  {!this.state.hideExchange4 && this.state.exchange4 === 'u4k' && <SamDialogue dialogue={this.getSamDialogue('s4j')}/>}   
                  {!this.state.hideExchange4 && this.state.exchange4 === 'u4l' && <SamDialogue dialogue={this.getSamDialogue('s4k')}/>}
                  {!this.state.hideExchange4 && <SamDialogue dialogue={this.getSamDialogue('s4all')}/>}
                   
                  {!this.state.hideExchange5 && <UserDialogue dialogue={this.getUserDialogue(this.state.exchange5)}/>}
                   
                  {!this.state.hideExchange5 && this.state.exchange5 === 'u5a' && <SamDialogue dialogue={this.getSamDialogue('s5a')}/>} 
                  {!this.state.hideExchange5 && this.state.exchange5 === 'u5b' && <SamDialogue dialogue={this.getSamDialogue('s5b')}/>} 
                  {!this.state.hideExchange5 && this.state.exchange5 === 'u5c' && <SamDialogue dialogue={this.getSamDialogue('s5c')}/>} 
                   
                  {!this.state.hideExchange6 && <UserDialogue dialogue={this.getUserDialogue(this.state.exchange6)}/>}
                   
                  {!this.state.hideExchange6 && this.state.exchange6 === 'u6a' && <SamDialogue dialogue={this.getSamDialogue('s6a')}/>}
                  {!this.state.hideExchange6 && this.state.exchange6 === 'u6a' && <SamDialogue dialogue={this.getSamDialogue('s6b')}/>}
                   
                  {!this.state.hideSummary0 && <Summary summary={this.getSummaryText('m0-default')} retryMonth={this.retryMonth} month = {month} />}
    
              </div>
            </div>
          </div>
          <div className="Response-button-row">
            <img src={responseBubble} className="Response-bubble" alt="response bubble" />  
            <div className="Response-text-div">
                <p>Click <br/>to<br/>respond!</p>
            </div>
          </div>
          <div className="Response-row">
            <button className="Response-button" id="Response1" onClick={this.toggleResponse1.bind(this)}>{this.state.userDialogue.find(x => x.id === responseID1).text}</button>
            <button className="Response-button" id="Response2" onClick={this.toggleResponse2.bind(this)}>{this.state.userDialogue.find(x => x.id === responseID2).text}</button>
            <button className="Response-button" id="Response3" onClick={this.toggleResponse3.bind(this)}>{this.state.userDialogue.find(x => x.id === responseID3).text}</button>
        </div>  
      </div>  
    );
  }
}

export default MainDialogue;
var d, h, m, s, ampm, clock;

function cloky() {
    d = new Date();
    h = d.getHours();
    m = d.getMinutes();
    ampm = h >=12 ? '<span class="ampm">pm</span' : '<span class="ampm">am</span>';
    h = h % 12;
    h = h ? h: 12
    m = m < 10 ? '0'+m : m;

clock = h + ":" + m;

document.getElementById("clock").innerHTML = clock;

setTimeout(cloky, 1000);
}

cloky()

  var imgCount = 14;
    var dir = 'images/';
    var randomCount = Math.round(Math.random() * (imgCount - 1)) + 1;
    var images = new Array
            images[1] = "bg1.jpg",
            images[2] = "bg2.jpg",
            images[3] = "bg3.jpg",
            images[4] = "bg4.jpg",
            images[5] = "bg5.jpg",
            images[6] = "bg6.jpg",
            images[7] = "bg7.jpg",
            images[8] = "bg8.jpg",
            images[9] = "bg9.jpg",
            images[10] = "bg10.jpg",
            images[11] = "bg11.jpg",
            images[12] = "bg12.jpg",
            images[13] = "bg13.jpg",
            images[14] = "bg14.jpg",

    document.body.style.backgroundImage = "url(" + dir + images[randomCount] + ")";

//    var dir = 'images/';
//    var images = new Array();
//            images[1] = "bg1.jpg";
//            images[2] = "bg2.jpg";
//            images[3] = "bg3.jpg";
//            images[4] = "bg4.jpg";
//            images[5] = "bg5.jpg";
//            images[6] = "bg6.jpg";
//            images[7] = "bg7.jpg";
//
//       
//
//    var imageDate = new Date();
//    var imageInterval = imageDate.getHours();
//    //        document.body.style.backgroundImage = "url("+"images/" + images[imageInterval] + ")";
//            document.body.style.backgroundImage = 'url(' + dir + images[imageInterval] + ')';

    var randomquotes = new Array ();
    randomquotes[0] = '“If you cannot do great things, do small things in a great way.” <span class="author-name"> <span class="author-name">Napoleon Hill <a id="twittershare" target="_blank"><i class="fab fa-twitter"></i></a></span>';
    randomquotes[1] = '“Nothing will work unless you do.” <span class="author-name">Maya Angelou <a id="twittershare" target="_blank"><i class="fab fa-twitter"></i></a>';
    randomquotes[2] = '“If you work on something a little bit every day, you end up with something that is massive.” <span class="author-name">Kenneth Goldsmith <a id="twittershare" target="_blank"><i class="fab fa-twitter"></i></a></span>';
    randomquotes[3] = '“Nothing is Impossible. The word itself says I\'m possible” <span class="author-name"> Andrey Hepburn <a id="twittershare" target="_blank"><i class="fab fa-twitter"></i></a></span>';
    randomquotes[4] = '“Whenever you find yourself doubting how far you can go, just remember how far you have come.” <span class="author-name"> Unknown <a id="twittershare" target="_blank"><i class="fab fa-twitter"></i></a></span>';
    randomquotes[5] = '“Everyone has inside them a piece of good news. The good news is you don’t know how great you can be! How much you can love! What you can accomplish! And what your potential is.” <span class="author-name">Anne Frank <a id="twittershare" target="_blank"><i class="fab fa-twitter"></i></a></span>';
    randomquotes[6] = '“In the middle of every difficulty lies opportunity.” <span class="author-name">Albert Einstein <a id="twittershare" target="_blank"><i class="fab fa-twitter"></i></a></span>';
    randomquotes[7] = '“If you get tired, learn to rest, not quit.” <span class="author-name">Banksy <a id="twittershare" target="_blank"><i class="fab fa-twitter"></i></a></span>';
    randomquotes[8] = '“Dreams don’t work unless you do.” <span class="author-name">John C. Maxwell <a id="twittershare" target="_blank"><i class="fab fa-twitter"></i></a></span>';
    randomquotes[9] = '“When you feel like quitting, think about why you started.” <span class="author-name">Unknown <a id="twittershare" target="_blank"><i class="fab fa-twitter"></i></a></span>';
    randomquotes[10] = '"Start where you are. Use what you have. Do what you can" <span class="author-name">Arthur Ashe <a id="twittershare" target="_blank"><i class="fab fa-twitter"></i></a></span>';
    randomquotes[11] = '“Our greates weakness lies in giving up. The most certain way to succeed is always to try just one more time.” <span class="author-name">Thomas A. Edision <a id="twittershare" target="_blank"><i class="fab fa-twitter"></i></a></span>';
    randomquotes[12] = '“Problems are not stop signs, they are guidelines.” <span class="author-name">Robert H. Schuller</span>';
    randomquotes[13] = '“If you can dream it, you can do it.” <span class="author-name">Walt Disney <a id="twittershare" target="_blank"><i class="fab fa-twitter"></i></a></span>';
    randomquotes[14] = '“Life is 10% what happens to you and 90% how you react to it.” <span class="author-name">Charles R. Swindoll <a id="twittershare"><i class="fab fa-twitter"></i></a></span>';
    randomquotes[15] = '“I hated every minute of training, but i said, don\'t quit. Suffer now and live the rest of your life as a champion.” <span class="author-name">Muhammad Ali</span>';
    randomquotes[16] = '“If you quit, you never wanted it in the first place.” <span class="author-name">Unknown <a id="twittershare"><i class="fab fa-twitter"></i></a></span>';
    randomquotes[17] = '“It\s fine to celebrate success but it is more important to heed to the lessons of failure.” <span class="author-name">Bill Gates <a id="twittershare"><i class="fab fa-twitter"></i></a></span>';
    randomquotes[18] = '“You can cry, scream, and bang your head in frustration but keep pushing forward. It’s worth it.” <span class="author-name">Unknown <a id="twittershare"><i class="fab fa-twitter"></i></a></span>';
    randomquotes[19] = '“Without self-discipline, success is impossible, period.” <span class="author-name">Lou Holtz <a id="twittershare"><i class="fab fa-twitter"></i></a></span>';
    randomquotes[20] = '“My ambition is handicapped by laziness.” <span class="author-name">Charles Bukowski <a id="twittershare"><i class="fab fa-twitter"></i></a></span>';
    randomquotes[21] = '“Those who are crazy enough to think they can change the world usually do" <br><span class="author-name">Steve Jobs</span>';
    randomquotes[22] = '“A dream doesn\'t become a reality through magic; it takes sweat, determination and hard work.” <span class="author-name">Colin Powell <a id="twittershare"><i class="fab fa-twitter"></i></a></span>';
    randomquotes[23] = '“Worry never robs tommorow of its sorry, it only saps today of its joy.” <br><span class="author-name">Leo F. Buscaglia</span>';
    randomquotes[24] = '“Worrying does not take away tommorow\'s troubles. It takes away today\'s peace.” <span class="author-name">Randy Armstrong <a id="twittershare"><i class="fab fa-twitter"></i></a></span>';
    randomquotes[25] = '“Smart People learn from their mistakes. But the real sharp ones learn from the mistakes of others.” <br><span class="author-name">Brandon Mull</span>';
    randomquotes[26] = '“Strength does not come from physical capacity. It comes from an indomitable will.” <span class="author-name">Mahatma Gandhi <a id="twittershare"><i class="fab fa-twitter"></i></a></span>';
    randomquotes[27] = '“Doubt kills more dreams than failure ever will.” <span class="author-name">Suzy Kassem <a id="twittershare"><i class="fab fa-twitter"></i></a></span>';
    randomquotes[28] = '“Never regret anything that made you smile.” <span class="author-name">Mark Twain <a id="twittershare"><i class="fab fa-twitter"></i></a></span>';
    randomquotes[29] = '“You must do the thing you think you cannot do.” <span class="author-name">Eleanor Roosevelt <a id="twittershare"><i class="fab fa-twitter"></i></a></span>';
    randomquotes[30] = '“I never lose. Either I win or learn.” <span class="author-name">Nelson Mandela <a id="twittershare"><i class="fab fa-twitter"></i></a></span>';
    randomquotes[31] = '“Today is your opportunity to build the tomorrow you want.” <span class="author-name">Ken Poirot <a id="twittershare"><i class="fab fa-twitter"></i></a></span>';
    randomquotes[32] = '“If you want to fly give up everything that weighs you down.” <span class="author-name">Buddha <a id="twittershare"><i class="fab fa-twitter"></i></a></span>';
    randomquotes[33] = '“Focus on being productive instead of busy.” <span class="author-name">Tim Ferriss <a id="twittershare"><i class="fab fa-twitter"></i></a></span>';
    randomquotes[34] = '“You don’t need to see the whole staircase, just take the first step.” <span class="author-name">Martin Luther King Jr <a id="twittershare"><i class="fab fa-twitter"></i></a></span>';
    randomquotes[35] = '“When someone says you can’t do it, do it twice and take pictures.” <span class="author-name">Unknown <a id="twittershare"><i class="fab fa-twitter"></i></a></span>';
    randomquotes[36] = '“If you’re too comfortable, it’s time to move on. Terrified of what’s next? You’re on the right track.” <span class="author-name">Susan Fales-Hill <a id="twittershare"><i class="fab fa-twitter"></i></a></span>';
    randomquotes[37] = '“Be happy with what you have while working for what you want.” <span class="author-name">Helen Keller <a id="twittershare"><i class="fab fa-twitter"></i></a></span>';
    randomquotes[38] = '“You’re so much stronger than your excuses” <span class="author-name">Unknown <a id="twittershare"><i class="fab fa-twitter"></i></a></span>';
    randomquotes[39] = '“Don’t tell everyone your plans, instead show them your results.” <span class="author-name">Unknown <a id="twittershare"><i class="fab fa-twitter"></i></a></span>';
    randomquotes[40] = '“I choose to make the rest of my life, the best of my life.” <span class="author-name">Louise Hay <a id="twittershare"><i class="fab fa-twitter"></i></a></span>';
    randomquotes[41] = '“Nothing can dim the light that shines from within.” <span class="author-name">Maya Angelou <a id="twittershare"><i class="fab fa-twitter"></i></a></span>';
    randomquotes[42] = '“Be so good they can’t ignore you.” <span class="author-name">Steve Martin <a id="twittershare"><i class="fab fa-twitter"></i></a></span>';
    randomquotes[43] = '“If you don’t get out of the box you’ve been raised in, you won’t understand how much bigger the world is.” <span class="author-name">Angelina Jolie <a id="twittershare"><i class="fab fa-twitter"></i></a></span>';
    randomquotes[44] = '“Do the best you can. No one can do more than that.” <span class="author-name">John Wooden <a id="twittershare"><i class="fab fa-twitter"></i></a></span>';
    randomquotes[45] = '“Do what you can, with what you have, where you are.” <span class="author-name">Theodore Roosevelt <a id="twittershare"><i class="fab fa-twitter"></i></a></span>';
    randomquotes[46] = '“‘It’s never too late to be what you might’ve been.” <span class="author-name">George Eliot <a id="twittershare"><i class="fab fa-twitter"></i></a></span>';
    randomquotes[47] = '“Trust yourself that you can do it and get it.” <span class="author-name">Baz Luhrmann <a id="twittershare"><i class="fab fa-twitter"></i></a></span>';
    randomquotes[48] = '“Don’t let what you can’t do interfere with what you can do.” <span class="author-name">Unknown <a id="twittershare"><i class="fab fa-twitter"></i></a></span>';
    randomquotes[49] = '“You can do anything you set your mind to.” <span class="author-name">Benjamin Franklin <a id="twittershare"><i class="fab fa-twitter"></i></a></span>';
    randomquotes[50] = '“All we can do is the best we can do.” <span class="author-name">David Axelrod <a id="twittershare"><i class="fab fa-twitter"></i></a></span>';
    randomquotes[51] = '“You never know what you can do until you try.” <span class="author-name">William Cobbett <a id="twittershare"><i class="fab fa-twitter"></i></a></span>';
    randomquotes[52] = '“Twenty years from now you’ll be more disappointed by the things you did not do than the ones you did.” <span class="author-name">Mark Twain <a id="twittershare"><i class="fab fa-twitter"></i></a></span>';
    randomquotes[53] = '“It’s okay to outgrow people who don’t grow. Grow tall anyways.” <span class="author-name">Unknown <a id="twittershare"><i class="fab fa-twitter"></i></a></span>';
    randomquotes[54] = '“When you feel like giving up just remember that there are a lot of people you still have to prove wrong.” <span class="author-name">Unknown <a id="twittershare"><i class="fab fa-twitter"></i></a></span>';
    randomquotes[56] = '“The world is full of nice people. If you can’t find one, be one.” <span class="author-name">Nishan Panwar <a id="twittershare"><i class="fab fa-twitter"></i></a></span>';
    randomquotes[57] = '“Believe in yourself, take on your challenges, dig deep within yourself to conquer fears. Never let anyone bring you down. You got to keep going.” <span class="author-name">Chantal Sutherland <a id="twittershare"><i class="fab fa-twitter"></i></a></span>';
    randomquotes[58] = '“If you can’t do anything about it then let it go. Don’t be a prisoner to things you can’t change.” <span class="author-name">Tony Gaskins <a id="twittershare"><i class="fab fa-twitter"></i></a></span>';
    randomquotes[59] = '“A walk to a nearby park may give you more energy and inspiration in life than spending two hours in front of a screen.” <span class="author-name">Tsang Lindsay <a id="twittershare"><i class="fab fa-twitter"></i></a></span>';
    randomquotes[60] = '“You can’t go back and change the beginning, but you can start where you are and change the ending.” <span class="author-name">C.S. Lewis <a id="twittershare"><i class="fab fa-twitter"></i></a></span>';
    randomquotes[61] = '“What is life without a little risk?” <span class="author-name">J.K. Rowling <a id="twittershare"><i class="fab fa-twitter"></i></a></span>';
     randomquotes[62] = '“A winner is a dreamer who never gives up.” <span class="author-name">Nelson Mandela <a id="twittershare"><i class="fab fa-twitter"></i></a></span>';
     randomquotes[63] = '“Oh yes, the past can hurt. But the way I see it, you can either run from it or learn from it.” <span class="author-name">The Lion King <a id="twittershare"><i class="fab fa-twitter"></i></a></span>';
     randomquotes[64] = '“Learn from the mistakes of others. You can’t live long enough to make them all yourself.” <span class="author-name">Eleanor Roosevelt <a id="twittershare"><i class="fab fa-twitter"></i></a></span>';
     randomquotes[65] = '“Done is better than perfect.” <span class="author-name">Sheryl Sandberg <a id="twittershare"><i class="fab fa-twitter"></i></a></span>';
     randomquotes[66] = '“If your dreams don’t scare you, they are too small.” <span class="author-name">Richard Branson <a id="twittershare"><i class="fab fa-twitter"></i></a></span>';
     randomquotes[67] = '“Today is your opportunity to build the tomorrow you want.” <span class="author-name">Ken Poirot <a id="twittershare"><i class="fab fa-twitter"></i></a></span>';
     randomquotes[68] = '“What hurts you blesses you.” <span class="author-name">Rumi <a id="twittershare"><i class="fab fa-twitter"></i></a></span>';
     randomquotes[69] = '“Nothing is stronger than a broken man rebuilding himself.” <span class="author-name">Unknown <a id="twittershare"><i class="fab fa-twitter"></i></a></span>';
     randomquotes[70] = '“The world is changed by your example, not by your opinion.” <span class="author-name">Paulo Coelho <a id="twittershare"><i class="fab fa-twitter"></i></a></span>';
     randomquotes[71] = '“If you don’t build your dream, someone else will hire you to help them build theirs.” <span class="author-name">Dhirubhai Ambani <a id="twittershare"><i class="fab fa-twitter"></i></a></span>';
     randomquotes[72] = '“I’m not in this world to live up to your expectations and you’re not in this world to live up to mine.” <span class="author-name">Bruce Lee <a id="twittershare"><i class="fab fa-twitter"></i></a></span>';
     randomquotes[73] = '“Dream beautiful dreams, and then work to make those dreams come true.” <span class="author-name">Spencer W. Kimball <a id="twittershare"><i class="fab fa-twitter"></i></a></span>';
     randomquotes[74] = '“Be the change you want to see in the world.” <span class="author-name">Mahatma Gandhi <a id="twittershare"><i class="fab fa-twitter"></i></a></span>';
     randomquotes[75] = '“Believe you can and you will.” <span class="author-name">Unknown <a id="twittershare"><i class="fab fa-twitter"></i></a></span>';
     randomquotes[76] = '“Do the right thing even when no one is looking.” <span class="author-name">Unknown <a id="twittershare"><i class="fab fa-twitter"></i></a></span>';
     randomquotes[77] = '“Make today the day you learn something new.” <span class="author-name">Unknown <a id="twittershare"><i class="fab fa-twitter"></i></a></span>';
     randomquotes[78] = '“Be silly, be honest, be kind.” <span class="author-name">Ralph Waldo Emerson <a id="twittershare"><i class="fab fa-twitter"></i></a></span>';
     randomquotes[79] = '“If you think someone could use a friend. Be one.” <span class="author-name">Unknown <a id="twittershare"><i class="fab fa-twitter"></i></a></span>';
     randomquotes[80] = '“It’s not what happens to you but how you react to it that matters.” <span class="author-name">Epictetus <a id="twittershare"><i class="fab fa-twitter"></i></a></span>';
     randomquotes[81] = '“You don’t have to be perfect to be amazing.” <span class="author-name">Unknown <a id="twittershare"><i class="fab fa-twitter"></i></a></span>';
     randomquotes[82] = '“The best way to predict your future is to create it.” <span class="author-name">Abraham Lincoln <a id="twittershare"><i class="fab fa-twitter"></i></a></span>';
     randomquotes[83] = '“Successful people are not gifted; they just work hard, then succeed on purpose.” <span class="author-name">G.K. Nielson <a id="twittershare"><i class="fab fa-twitter"></i></a></span>';
     randomquotes[84] = '“Don’t watch the clock; do what it does. Keep going.” <span class="author-name">Sam Levenson <a id="twittershare"><i class="fab fa-twitter"></i></a></span>';
     randomquotes[85] = '“You must do the kind of things you think you cannot do.” <span class="author-name"> Eleanor Roosevelt <a id="twittershare"><i class="fab fa-twitter"></i></a></span>';
     randomquotes[86] = '“It’s not what you do once in a while it’s what you do day in and day out that makes the difference.” <span class="author-name">Jenny Craig <a id="twittershare"><i class="fab fa-twitter"></i></a></span>';
     randomquotes[87] = '“Falling down is how we grow. Staying down is how we die.” <span class="author-name">Brian Vaszily <a id="twittershare"><i class="fab fa-twitter"></i></a></span>';
     randomquotes[88] = '“Wealth isn’t about having a lot of money it’s about having a lot of options.” <span class="author-name">Chris Rock <a id="twittershare"><i class="fab fa-twitter"></i></a></span>';
     randomquotes[89] = '“There may be people that have more talent than you, but there’s no excuse for anyone to work harder than you.” <span class="author-name">Derek Jeter <a id="twittershare"><i class="fab fa-twitter"></i></a></span>';
     randomquotes[90] = '“When Plan “A” doesn’t work, don’t worry, you still have 25 more letters to go through.” <span class="author-name">Unknown <a id="twittershare"><i class="fab fa-twitter"></i></a></span>';
     randomquotes[91] = '“Opportunity does not knock, it presents itself when you beat down the door.” <span class="author-name">Unknown <a id="twittershare"><i class="fab fa-twitter"></i></a></span>';
     randomquotes[92] = '“I have not failed. I’ve just found 10,000 ways that won’t work.” <span class="author-name">Thomas A. Edison <a id="twittershare"><i class="fab fa-twitter"></i></a></span>';
     randomquotes[93] = '“It is only when we take chances, when our lives improve. The initial and the most difficult risk that we need to take is to become honest.” <span class="author-name">Walter Anderson <a id="twittershare"><i class="fab fa-twitter"></i></a></span>';
     randomquotes[94] = '“When you know your worth, no one can make you feel worthless.” <span class="author-name">Unknown <a id="twittershare"><i class="fab fa-twitter"></i></a></span>';
     randomquotes[95] = '“If you judge people, you have no time to love them.” <span class="author-name">Mother Teresa <a id="twittershare"><i class="fab fa-twitter"></i></a></span>';
     randomquotes[96] = '“Once you do know what the question actually is, you’ll know what the answer means.” <span class="author-name">Douglas Adams <a id="twittershare"><i class="fab fa-twitter"></i></a></span>';
     randomquotes[97] = '“The two most important days in your life are the day you’re born and the day you find out why.” <span class="author-name">Mark Twain <a id="twittershare"><i class="fab fa-twitter"></i></a></span>';
     randomquotes[98] = '“Nothing ever goes away until it teaches us what we need to know.” <span class="author-name">Pema Chodron <a id="twittershare"><i class="fab fa-twitter"></i></a></span>';
     randomquotes[99] = '“We can see through others only when we can see through ourselves.” <span class="author-name">Bruce Lee <a id="twittershare"><i class="fab fa-twitter"></i></a></span>';
     randomquotes[100] = '“Work hard and don’t give up hope. Be open to criticism and keep learning. Surround yourself with happy, warm and genuine people.” <span class="author-name">Tena Desae <a id="twittershare"><i class="fab fa-twitter"></i></a></span>';
     randomquotes[101] = '““Forget your excuses. You either want it bad or don’t want it at all.” <span class="author-name">Unknown <a id="twittershare"><i class="fab fa-twitter"></i></a></span>';
     randomquotes[102] = '“The key to success is to start before you are ready.” <span class="author-name">Marie Forleo <a id="twittershare"><i class="fab fa-twitter"></i></a></span>';
     randomquotes[103] = '“Don’t be upset when people reject you. Nice things are rejected all the time by people who can’t afford them.” <span class="author-name">Unknown <a id="twittershare"><i class="fab fa-twitter"></i></a></span>';
     randomquotes[104] = '“Success is no accident. It is hard work, perseverance, learning, studying, sacrifice and most of all, love of what you are doing or learning to do.” <span class="author-name">Pele <a id="twittershare"><i class="fab fa-twitter"></i></a></span>';
     randomquotes[105] = '“How to stop time: kiss. How to travel in time: read. How to escape time: music. How to feel time: write. How to release time: breathe.” <span class="author-name">Matt Haig <a id="twittershare"><i class="fab fa-twitter"></i></a></span>';
     randomquotes[106] = '“The trouble is, you think you have time.” <span class="author-name">Buddha <a id="twittershare"><i class="fab fa-twitter"></i></a></span>';
     randomquotes[107] = '“Success is a lousy teacher. It seduces smart people into thinking they can’t lose.” <span class="author-name">Bill Gates <a id="twittershare"><i class="fab fa-twitter"></i></a></span>';
     randomquotes[108] = '“You can’t let your failures define you. You have to let your failures teach you.” <span class="author-name">Barack Obama <a id="twittershare"><i class="fab fa-twitter"></i></a></span>';
     randomquotes[109] = '“Stop being afraid of what could go wrong, and start being excited about what could go right.” <span class="author-name">Tony Robbins <a id="twittershare"><i class="fab fa-twitter"></i></a></span>';
     randomquotes[110] = '“Defeat is a state of mind; no one is ever defeated until defeat is accepted as a reality.” <span class="author-name">Bruce Lee <a id="twittershare"><i class="fab fa-twitter"></i></a></span>';
     randomquotes[111] = '“It is impossible to live without failing at something, unless you live so cautiously that you might as well not have lived at all – in which case, you fail by default.” <span class="author-name">J.K. Rowling <a id="twittershare"><i class="fab fa-twitter"></i></a></span>';
     randomquotes[112] = '“Success is going from failure to failure without losing your enthusiasm.” <span class="author-name">Winston Churchill <a id="twittershare"><i class="fab fa-twitter"></i></a></span>';
     randomquotes[113] = '“Be strong enough to let go and wise enough to wait for what you deserve.” <span class="author-name">Unknown <a id="twittershare"><i class="fab fa-twitter"></i></a></span>';
     randomquotes[114] = '“What is coming is better than what is gone.” <span class="author-name">Unknown <a id="twittershare"><i class="fab fa-twitter"></i></a></span>';
     randomquotes[115] = '“Do something today that your future self will thank you for.” <span -class="author-name">Unknown <a id="twittershare"><i class="fab fa-twitter"></i></a></span>';
     randomquotes[116] = '“It takes nothing to join the crowd. It takes everything to stand alone.” <span -class="author-name">Hans F. Hansen <a id="twittershare"><i class="fab fa-twitter"></i></a></span>';
     randomquotes[117] = '“Your mind is powerful. When you fill it with positive thoughts your whole world will change.” <span class="author-name">Unknown <a id="twittershare"><i class="fab fa-twitter"></i></a>.</span>'; 
     randomquotes[118] = '“Your only limit is your mind.” <span class="author-name">Unknown <a id="twittershare"><i class="fab fa-twitter"></i></a></span>';
     randomquotes[119] = '“Stop being afraid of what can go wrong and start being positive about what can go right.” <span class="author-name">Unknown <a id="twittershare"><i class="fab fa-twitter"></i></a></span>';
     randomquotes[120] = '“The difference between who you are and who you want to be is what you do.” <span class="author-name">Unknown <a id="twittershare"><i class="fab fa-twitter"></i></a></span>';
     randomquotes[121] = '“You were born to win, but to be a winner, you must plan to win, prepare to win, and expect to win.” <span class="author-name">Zig Ziglar <a id="twittershare"><i class="fab fa-twitter"></i></a></span>';
     randomquotes[122] = '“A winner is a dreamer who never gives up.” <span class="author-name">Nelson Mandela <a id="twittershare"><i class="fab fa-twitter"></i></a></span>';
     randomquotes[123] = '“The secret of your future is hidden in your daily routine.” <span class="author-name">Mike Murdock <a id="twittershare"><i class="fab fa-twitter"></i></a></span>';   
     randomquotes[124] = '“Losers quit when they fail. Winners fail until they succeed.” <span class="author-name">Robert T. Kiyosaki <a id="twittershare"><i class="fab fa-twitter"></i></a></span>';
     randomquotes[125] = '“It is never too late to be what you might have been.” <span class="author-name">George Eliot <a id="twittershare"><i class="fab fa-twitter"></i></a></span>';
     randomquotes[126] = '“You will never always be motivated, so you must learn to be disciplined.” <span class="author-name">Unknown <a id="twittershare"><i class="fab fa-twitter"></i></a></span>';
     randomquotes[127] = '“Never stop learning because life never stops teaching.” <span class="author-name">Unknown <a id="twittershare"><i class="fab fa-twitter"></i></a></span>';                       randomquotes[128] = '“If you’re the smartest person in the room, you’re in the wrong room.” <span class="author-name">Unknown <a id="twittershare"><i class="fab fa-twitter"></i></a></span>';          
     randomquotes[129] = '“To learn a language is to have one more window from which to look at the world.” <span class="author-name">Chinese Proverb <a id="twittershare"><i class="fab fa-twitter"></i></a></span>'; 
     var randomquoteDate = new Date();
     var randomquoteInterval = randomquoteDate.getHours();



document.getElementById('randomquote').innerHTML = randomquotes[randomquoteInterval]; 

var quoteText = document.getElementById("randomquote").textContent;

document.getElementById('twittershare').href="https://twitter.com/intent/tweet/?text=" + quoteText;


var GoodMorningText = new Array ();

        GoodMorningText[1] = "Good morning";
        GoodMorningText[2] = "You got this";
        GoodMorningText[3] = "Forgive yourself";
        GoodMorningText[4] = "Don't quit";
        GoodMorningText[5] = "Be better";
        GoodMorningText[6] = "Dream big";
        GoodMorningText[7] = "Let it all go";
        GoodMorningText[8] = "Be kind";
        GoodMorningText[9] = "Work harder";
        GoodMorningText[10] = "Believe you can";
        GoodMorningText[11] = "Be greatful";
        GoodMorningText[12] = "You're amazing";


 var randomGoodMorningTextCount = 12;
 var randomGoodMorningText = Math.round(Math.random() * (randomGoodMorningTextCount - 1)) + 1;


var myDate = new Date();

    if (myDate.getHours() < 12) {
        document.getElementById('greetings').innerHTML = GoodMorningText[randomGoodMorningText]
    }
    else if(myDate.getHours() >=12 && myDate.getHours() <=17){
        document.getElementById('greetings').innerHTML = 'Good afternoon';
    }
    else if (myDate.getHours() > 17 && myDate.getHours() <=24) {
        document.getElementById('greetings').innerHTML = 'Good evening';
    }
    else
    {
        document.getElementById('greetings').innerHTML = 'Good night';
    }


var todoinput = document.getElementById('item')

var itemsArray = localStorage.getItem('Inbox') ? JSON.parse(localStorage.getItem('Inbox')) : []

localStorage.setItem('Inbox', JSON.stringify(itemsArray))
var inboxdata = JSON.parse(localStorage.getItem('Inbox'))



document.getElementById('todos').addEventListener('submit', function(e) {
  location.reload(); 
  e.preventDefault()
  var date = new Date()
  var getId = date.getTime();
  var inbox = {id: getId, todo: todoinput.value} 
  itemsArray.push(inbox)
  localStorage.setItem('Inbox', JSON.stringify(itemsArray))
  todoinput.value =''
  
})

for (var i=0; i < itemsArray.length; i++) {
        var id = itemsArray[i].id;
        var todoText = itemsArray[i].todo;
        inboxitems.innerHTML +=
        '<li id="number" class="list-item">' +todoText+ '<span class="buttons"><button class="checkbutton" id="removeItem" itemid="'+id+'"></button><button class="uncheckbutton move-item"></button><button class="recheckbutton transfer-item"></button><button class="clear-transfer-item" id="deletemoveItem" itemid="'+id+'">&times;</button><button class="clear-item" id="deleteItem" itemid="'+id+'">&times;</button></span></li>';
  
    document.getElementById('deleteItem').addEventListener('click', deleteItem)
    document.getElementById('removeItem').addEventListener('click', removeItem)
    document.getElementById('deletemoveItem').addEventListener('click', deletemoveItem)


}
function deleteItem()  {
        var id = this.getAttribute('itemid');
           location.reload(); 
        for (var i = 0; i < itemsArray.length;i++) {
            if (itemsArray[i].id == id) {
                itemsArray.splice(i, 1);
                break;
            }
        }
   localStorage.setItem("Inbox", JSON.stringify(itemsArray)); 
   document.getElementById('inboxitems').innerHTML = ""; 
  
}        

function removeItem() {
    var id = this.getAttribute('itemid');
      location.reload(); 
    for (var i = 0; i < itemsArray.length;i++) {
            if (itemsArray[i].id == id) {
                itemsArray.splice(i, 1);
                break;
            }
        }
    localStorage.setItem("Inbox", JSON.stringify(itemsArray)); 
}

function deletemoveItem() {
    var id = this.getAttribute('itemid'); 
      location.reload(); 
    for (var i = 0; i < itemsArray.length;i++) {
            if (itemsArray[i].id == id) {
                itemsArray.splice(i, 1);
                break;
            }
        }
    localStorage.setItem("Inbox", JSON.stringify(itemsArray)); 
}



$('.checkbutton').click(function (e) {
       location.reload(); 
    $(this).closest('li').toggleClass('done');
    if ($(this).closest('li').hasClass('done')){
        $(this).closest('li').prependTo('#completed-task')
        var completedItem = $('#completed-task').html();
        localStorage.setItem('CompletedTask', completedItem);
        
    } else {
        $(this).closest('li').prependTo('#inboxitems')
        var completedItem = $('#completed-task').html();
        localStorage.setItem('CompletedTask', completedItem);

    }
})

document.getElementById('completed-task').innerHTML = localStorage.getItem('CompletedTask');

$('.uncheckbutton').click(function (e) {
    location.reload(); 
   $(this).closest('li').prependTo('#movedInbox');
    var InboxItems = $('#movedInbox').html();
    localStorage.setItem('InboxItems', InboxItems);     
    })

$('.move-item').click(function (e) {
    location.reload(); 
    $(this).closest('li').remove('li');
    var completedItem = $('#completed-task').html();
    localStorage.setItem('CompletedTask', completedItem);     
    })

$('.clear-item').click(function (e) {
    location.reload(); 
    $(this).closest('li').remove('li');
    var completedItem = $('#completed-task').html();
    localStorage.setItem('CompletedTask', completedItem);     
    })

document.getElementById('movedInbox').innerHTML = localStorage.getItem('InboxItems');

$('.recheckbutton').click(function (e) {
    location.reload(); 
   $(this).closest('li').prependTo('#completed-task');
      var completedItem = $('#completed-task').html();
        localStorage.setItem('CompletedTask', completedItem);  
    })

$('.transfer-item').click(function (e) {
    location.reload();
    $(this).closest('li').remove('li');
    var InboxItems = $('#movedInbox').html();
    localStorage.setItem('InboxItems', InboxItems);   
    })

$('.clear-transfer-item').click(function (e) {
    $(this).closest('li').remove('li');
    
    var InboxItems = $('#movedInbox').html();
    localStorage.setItem('InboxItems', InboxItems);  
    
    })


var todoscount = document.getElementById("inboxitems").getElementsByTagName("li");

   var itemslist = todoscount.length

document.getElementById("alltask").innerHTML = itemslist;


if (todoscount.length === 0) {
    emptyinbox ="Add some Tasks and go achieve them!";
} else {
  emptyinbox = "<br><br><br><a href='index.html' id='clear-inbox'>Clear All Inbox</a><p class='clearinbox-notice'></p>";
}

document.getElementById("inboxempty").innerHTML = emptyinbox;

document.getElementById("clear-inbox").addEventListener('click', function() {
  localStorage.removeItem('Inbox')
  localStorage.removeItem('InboxItems')
})




var completedtodoscount = document.getElementById("completed-task").getElementsByTagName("li");

var completedlist = completedtodoscount.length
   
document.getElementById("completedtasknumber").innerHTML = completedlist;

if (completedtodoscount.length === 0) {
    completedtask ="Completed tasks will show here.";
} else {
  completedtask = "<br><br><br><a href='index.html' id='clear-inboxcompleted'>Clear All Completed Task</a>";
}

document.getElementById("completedtask").innerHTML = completedtask;

document.getElementById("clear-inboxcompleted").addEventListener('click', function() {
  localStorage.removeItem('CompletedTask')
})

$('.inboxlist').click(function () {
  $('#inbox').toggleClass('menu-display').css('display', 'block');
    if ($('#inbox').hasClass('menu-display')){
        localStorage.setItem('MenuDisplay', 'menu-display');
    } else {
        localStorage.removeItem('MenuDisplay');
    }
        
});

$(document).ready(function(){
    var MenuDisplay = localStorage.getItem('MenuDisplay');
    if (MenuDisplay !== '') {
        $('#inbox').addClass(MenuDisplay);
    }
});


$('.settings').click(function () {
  $('#footersettings').toggleClass('menu-footer-display').css('display', 'block');
    if ($('#footersettings').hasClass('menu-footer-display')){
        localStorage.setItem('MenuFooterDisplay', 'menu-footer-display');
    } else {
        localStorage.removeItem('MenuFooterDisplay');
    }
        
});

$(document).ready(function(){
    var MenuFooterDisplay = localStorage.getItem('MenuFooterDisplay');
    if (MenuFooterDisplay !== '') {
        $('#footersettings').addClass(MenuFooterDisplay);
    }
});


  $(".loader").delay(500).fadeOut("slow");
  $("#overlayer").delay(500).fadeOut("slow");



//User


const formforuser = document.querySelector('form')
const userforms = document.getElementById('userform')

let userArray = localStorage.getItem('User') ? JSON.parse(localStorage.getItem('User')) : []

localStorage.setItem('User', JSON.stringify(userArray))
const userdata = JSON.parse(localStorage.getItem('User'))

const adduser = text => {
  const userlist = document.createElement('span');
  userlist.textContent = text
  userlist.prepend(', ')
  userlist.append('.')
  greetings.append(userlist);
}


document.getElementById('user').addEventListener('submit', function(evt){
  evt.preventDefault()

  userArray.push(userforms.value )
  localStorage.setItem('User', JSON.stringify(userArray))
  adduser(userforms.value)
  userforms.value = '' 
})



userdata.forEach(userform => {
  adduser(userform)
})


document.getElementById('dataclear').addEventListener('click', function(){
   localStorage.clear()
 })


$(function() {

  $('.inboxlist').on('click', function(event) {
    $('.inbox-items').toggle();
    event.stopPropagation();
  });

  $('.inbox-items').on('click', function(event) {
    event.stopPropagation();
  });

  $(window).on('click', function() {
    $('.inbox-items').slideUp();
  });

});

$(function() {

  $('.settings').on('click', function(e) {
    $('.user').toggle();
    e.stopPropagation();
  });

  $('.user').on('click', function(e) {
    e.stopPropagation();
  });

  $(window).on('click', function() {
    $('.user').slideUp();
  });

});

var inboxitem = document.getElementsByClassName('list-item');


d = new Date();
var date = d.getDate();

var weekday = new Array(7);
weekday[0] = "Sun";
weekday[1] = "Mon";
weekday[2] = "Tue";
weekday[3] = "Wed";
weekday[4] = "Thu";
weekday[5] = "Fri";
weekday[6] = "Sat";

var dayname = weekday[d.getDay()];

var month = new Array();
month[0] = "January";
month[1] = "February";
month[2] = "March";
month[3] = "April";
month[4] = "May";
month[5] = "June";
month[6] = "July";
month[7] = "August";
month[8] = "September";
month[9] = "October";
month[10] = "November";
month[11] = "December";


var monthname = month[d.getMonth()];
var year = d.getFullYear();
var dateStr = dayname + ", " + monthname + " " + date + ", " + year;
document.getElementById("date").innerHTML = dateStr;




$('#todoTab a').on('click', function (e) {
  e.preventDefault()
  $(this).tab('show')
})


$(document).ready(function(){
    $('a[data-toggle="tab"]').on('show.bs.tab', function(e) {
        localStorage.setItem('activeTab', $(e.target).attr('href'));
    });
    var activeTab = localStorage.getItem('activeTab');
    if(activeTab){
        $('#todoTab a[href="' + activeTab + '"]').tab('show');
    }
});



$('#settingsTab a').on('click', function (e) {
  e.preventDefault()
  $(this).tab('show')
  
})

$(document).ready(function(){
    $('a[data-toggle="tab"]').on('show.bs.tab', function(e) {
        localStorage.setItem('activeTabSettings', $(e.target).attr('href'));
    });
    var activeTabSettings = localStorage.getItem('activeTabSettings');
    if(activeTabSettings){
        $('#settingsTab a[href="' + activeTabSettings + '"]').tab('show');
    }
});


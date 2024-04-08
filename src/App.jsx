import { useState } from 'react';
/* This website contains each component: Slideshow, Game, Url, etc, which makes it much more organized. The embedded components within the Game component will retrieve their props from the Game component. These separate components are essentially individual parts of the website; when compiled together it makes a whole website*/

// Lists which will be used for props
const lobCorpParagraphs = [
  "Have you heard of SCP's? Enjoy them even? If so, this is the perfect game for you! Lobotomy Corporation is game made by a Korean indie game developing company: Project Moon. It is a monster management \"simulation\" where you are the manager of of this establishment, and through a screen, you manage your employees (which you can customize by the way) and assign them to work on these monsters called \"abnormalities\", creatures which you harvest energy from. All have their unique stories and ways to perform work on them. Collect enough energy to fufill the quota and you can end the day! Simple, right? Well not exactly.",

  "Some abnormalities are easy to work with, while others are extremely picky about the kinds of work your employees can perform on them. In order to discover what works best for each abno, repeatedly working on them will allow you to gain more information about them. Be careful though, failing the work usually brings about their breach from their containment, which requires your employees to suppress themas soon as possible before too many casualties can occur. Yes, your employees CAN die, and if you pass on to the next day, they are dead for good and any thing they had on them such as gear will be destroyed. Retrying the day will reset the day's progress, and unlike other games, retrying and turning back time is ESSENTIAL in this game, as your employees will be wiped out many times.",

  "Personally, I was hooked from the very beginning. It IS a difficult game, and at points can make you feel very overwhelmed with everything happening. But the story, unique roguelike gameplay, and becoming too attached to my employees made me play it nonstop (to the point I 100% it and got the true ending)! I highly recommend this game to anyone who wants to get into Project Moon's games."
]

const lobCorpImages = [
  "src/images/LobCorp/ss_7f8118a7b224505b397f481e8187fb647a3a42c6.jpg",
  "src/images/LobCorp/ss_71db0d954dcec5585f201a781db6dac2df041b85.jpg",
  "src/images/LobCorp/ss_54183ee9d7dc3d125df090c2fb69bc32c8bc50bc.jpg"
]

const lorParagraphs = [
  "And here is the sequel to Lobotomy Corporation! To avoid spoilers, I will just go over the basics:",

  "Library of Ruina is a card game where you battle \"guests\" to obtain books. These are held through \"receptions\", in which you send invitations to guests to enter said mysterious library. You use cards called pages to attack an enemy. You can only use as many cards as you have speed die. With these speed die (rng based die which shows the attack order for each person), you can assign what card you want to target on an enemy's speed die. Have a higher speed die, the earlier you can use your page to attack your targeted enemy (except in certain scenerios like clashing, but we won't get into that for now). Each card costs a certain amount of light, and 1 light regenerates per scene. Oh yeah, I should explain what scenes are.",

  "Scenes are like turns in this game, and each turn involves your librarians using their cards to either deal damage to the enemy's HP or SP. HP is your typical health points and SP is your stagger points. If your HP reaches 0, you die (obviously). SP are stagger points. If your SP reaches 0, you will unable to use any of your speed die and you will be vulnerable to all types of damage: blunt, pierce and slash. There is no difference to these types of damage (unlike your typical elemental damage triangle) other than the fact that some people are weak or resistant to certain damage. Once the guests die, they will be turned into books, in which you use to either burn into pages or use for future receptions. Confused already? Yeah, it gets even more complicated. There is a reason why people say that \"the difficulty spike is vertical\" in this game.",

  "I'll have to admit I've only played 7 hours of this game, but I've wanted it for so long and so far I'm addicted. I cannot praise Project Moon enough for their difficult and engaging gameplay where strategy and taking your time to read and figure our your moves are key. Also, the story and character writing is so beautiful. And if you want to read the enriching story, but not into frustrating rng and stress, there are plenty of mods that can make the gameplay much easier."
]

const lorImages = [
  "src/images/LoR/ss_43f3c74028922a9e0a80be23b52e90c9cb727417.jpg",
  "src/images/LoR/ss_31224734740c90faf7e9d9986962c1133e0dd2c3.jpg",
  "src/images/LoR/ss_c80e2ea36a79f73d87e9740f470054199a1f5e55.jpg"
]

const stardewParagraphs = [
  "Here's a game most cozy game players know of! Stardew valley is a farming game where you, the farmer, travel to your grandfather's old abandoned farm in Stardew Valley, a quaint town away from the bustling city life. Plant some crops, go fishing, talk to the townsfolk, mine some ore, fight some monsters, and maybe even some romance?",

  "Ultimately, the main objective is to bring back the prosperity of your grandfather's farm and the town, but there is so much to do around town, places to explore, money to make! The possibilities are endless with cute pixel graphics and a calm atmosphere, that it is so easy to become addicted to. For me, I played it nonstop one summer and I eventually achieved 100% on my first singleplayer farm!",

  "What I love about this game is that there is no deadline for any main objectives. You can play they can however you want, for as long as you want. Play the game at your own pace, or speed through it if you wish. You have the freedom to progress as you choose!"
]

const stardewImages = [
  "src/images/Stardew/ss_9ac899fe2cda15d48b0549bba77ef8c4a090a71c.jpg",
  "src/images/Stardew/ss_30aeedc47e731232ade368831a598d6545346f70.jpg",
  "src/images/Stardew/ss_b887651a93b0525739049eb4194f633de2df75be.jpg"
]

const freezeriaParagraphs = [
  "I grew up with flash games back in the day, and Papa Louie games are no exception. And now that Flash has ended, one of their games has finally launched a remastered version on Steam!",

  "Papa's Freezeria Deluxe is a restaurant simulation like game where you work at a sundae shop. Take orders, mix, and add toppings as they like it and they will grade you based on how well you made their sundae. As you progress through each day, you will unlock more ice cream, whipped cream, and toppings for customers to choose from, and you can even customize the restaurant and your workers too!",

  "At certain points, you will reach a holiday. During each holiday, you can match the workers clothing and furniture to match with the holiday to receive more tips from the customers, so its integral to do so to gain more money. There are also sundae specials, which have an added bonus to them (such as a multiplier of tips you receive) if you make them well enough. At the end of each day, there are these customers called \"closers\", which are people who are very picky with their orders, and will grade your sundae harsher than normal customers.",

  "It is a very chill game and I loved every second of it! Well, except for the fact that customers judge me for one dropped sprinkle, but other than that I cannot recommend this enough for people who loved Papa Louie games when they were younger, as it provides what the original flash game did and much more!"
]

const freezeriaImages = [
  "src/images/Freezeria/ss_0dea2f637568c519c2e4dac588230a077969161c.jpg",
  "src/images/Freezeria/ss_603a27f00bf74b729b41d76dbeb27efa652b20c1.jpg",
  "src/images/Freezeria/ss_1232bd5d3d2a63809e9259113c217742a92754dd.jpg"
]

// Header component
function Header () {
  return (
    <>
    <header>
      <h1 className = "title-name">Personal Favorite Games on Steam, and Why you Should Play Them</h1>
      <p className = "author">Jessie Kim</p>
    </header>
    </>
  )
}

// props = {images : gameImages, nameOfClass : game_slides}
function SlideShow (props) {
  {/*currSlide = 0, setCurrSlide is a function. currSlide is individual for each SlideShow compnonent */}
  const [currSlide, setCurrSlide] = useState(0)
  
  {/*a function to change the value of the variable currSlide and re-render the page, it increments the currSlide index based on if prev or next was clicked*/}
  function handleSlide (increment) {
    if (currSlide == props.images.length - 1 && increment > 0) {
      setCurrSlide(0)
    } else if (currSlide == 0 && increment < 0) {
      setCurrSlide(props.images.length - 1)
    } else {
      setCurrSlide(currSlide + increment)
    }
  }

  {/*returns the slideshow component*/}
  return (
    <>
      <div className="slider">
        
        <img className = {props.nameOfClass} src = {props.images[currSlide]}></img>

        <button className="prev" onClick={() => handleSlide(-1)}>&#10094;</button>
        <button className="next" onClick={() => handleSlide(1)}>&#10095;</button>
      </div>
    </>
  )
}

// props = {url : urlGame}
// Link component which will be within the Game component. It will receive its props from the Game component
function Link (props) {
  return (
    <p>Link to the Steam page is <a href={props.url} target="_blank" rel="noopener noreferrer">HERE</a>.</p>
  )
}

// props = {title : "game title", paragraphs : gameParagraphs}
// Also takes in images and nameOfClass props for the SlideShow component (prop drilling)
function Game (props) {
  {/*returns the game component*/}
  return (
    <>
      <h1>{props.title}</h1>
      <SlideShow
        images = {props.images}
        nameOfClass = {props.nameOfClass}
      />
      {/*loops through each paragraph of the paragraphs list and creates a <p> */}
      {props.paragraphs.map ((paragraph) => (
        <p>{paragraph}</p>
      ))}

      <Link 
        url = {props.url}
      />
    </> 
  )
}

// App function which compiles all the components to create the website.
// Each game component takes in a title and paragraphs, with prop drilling the images and nameOfClass for when the slideshow component is made inside Game
function App () {
  return (
    <>
      <div className = "header"> <Header /> </div>

      <p id="introduction">
        As a person who loves to play a variety of games on Steam, I wanted to share my favorite games in hopes that maybe you will check it out too! These games range from cozy and relaxing, to "oh my god what is happening why are people dying help-" (these games are not ordered by favoritism).
      </p>

      <div className = "games">
        <Game 
          title = "Lobotomy Coporation"
          images = {lobCorpImages}
          paragraphs = {lobCorpParagraphs}
          nameOfClass = "lobcorp_images"
          url = "https://store.steampowered.com/app/568220/Lobotomy_Corporation__Monster_Management_Simulation/"
        />

        <Game 
          title = "Library of Ruina"
          images = {lorImages}
          paragraphs = {lorParagraphs}
          nameOfClass = "lor_images"
          url = "https://store.steampowered.com/app/1256670/Library_Of_Ruina/"
        />

        <Game 
          title = "Stardew Valley"
          images = {stardewImages}
          paragraphs = {stardewParagraphs}
          nameOfClass = "stardew_images"
          url = "https://store.steampowered.com/app/413150/Stardew_Valley/"
        />

        <Game 
          title = "Papa's Freezeria Deluxe"
          images = {freezeriaImages}
          paragraphs = {freezeriaParagraphs}
          nameOfClass = "freezeria_images"
          url = "https://store.steampowered.com/app/2291760/Papas_Freezeria_Deluxe/"
        />

      </div> 
    </>

  )

}

export default App
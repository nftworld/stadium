import utils from "../../node_modules/decentraland-ecs-utils/index";
import {DiscoBall} from 'modules/discoball'
//https://docs.decentraland.org/development-guide/systems/#loop-at-a-timed-interval
/*
  "scene": {
    "parcels": [
      "-65,-110","-67,-109","-67,-110","-66,-109","-66,-110","-65,-109"
    ],
    "base": "-65,-110"
  },
  */
/*
  "scene": {
    "parcels": [
      "0,0","0,1","0,2","1,1","1,2","-2,0","-1,0","-2,-1","-1,-1","-1,1","-2,1","0,-1","1,-1","1,0","-3,-1","-3,0","-3,1","-3,2","-3,3","-3,4","-2,2","-2,3","-2,4","-1,2","-1,3","-1,4","0,3","0,4","1,3","1,4","2,0","2,1","2,2","2,3","2,4","-4,-1","-4,0","-4,1","-4,2","-4,3","-4,4","-4,5","-4,6","-4,7","-3,6","-3,7","-2,6","-2,7","-1,6","-1,7","0,6","0,7","1,6","1,7","3,7","2,7","2,6","2,5","1,5","0,5","-1,5","-2,5","-3,5","3,4","3,3","3,6","3,5","3,2","3,1","3,0","3,-1","2,-1","4,1","4,2","4,3","4,4","4,5","4,6","4,7","4,0","4,-1","0,-2","-1,-2","-2,-2","-3,-2","-4,-2","-5,-2","-5,-1","-5,0","-5,1","-5,2","-5,3","-5,4","-5,5","-5,6","-5,7","-5,8","-4,8","-3,8","-2,8","-1,8","0,8","1,8","2,8","3,8","4,8","5,8","5,7","5,6","5,5","5,4","5,3","5,2","5,1","5,0","5,-1","5,-2","4,-2","3,-2","2,-2","1,-2"
    ],
    "base": "0,0"
  },
  */

//import { Lights } from "./lights";

/*
const stadiumscenePosX = -2
const stadiumscenePosZ = 3

const stadiumsceneRot1 = 0
const stadiumsceneRot2 = 90
const stadiumsceneRot3 = 0
*/

const stadiumscenePosX = 0
const stadiumscenePosZ = 0

const stadiumsceneRot1 = 0
const stadiumsceneRot2 = 0
const stadiumsceneRot3 = 0

const stadiumscene = new Entity()
  stadiumscene.addComponent(
    new Transform({
      position: new Vector3(stadiumscenePosX*16,0,stadiumscenePosZ*16),
      rotation: Quaternion.Euler(stadiumsceneRot1,stadiumsceneRot2,stadiumsceneRot3)
    })
  )
engine.addEntity(stadiumscene);
/*
const centerEntity = new Entity()
let centerShape = new SphereShape()
centerEntity.addComponent(centerShape)
const centerEntityTransform = new Transform({
  position: new Vector3(0,1,16),
  rotation: Quaternion.Euler(0,0,0),
  scale: new Vector3(1,1,1)
})
centerEntity.addComponent(centerEntityTransform)
centerEntity.setParent(stadiumscene)
*/

/*
system timer 

let timer: number = 10

export class LoopSystem {
  update(dt: number) {
    if (timer > 0) {
      timer -= dt
    } else {
      timer = 10
      // DO SOMETHING
    }
  }
}

*/
var autoplayvideo = true;
//let showTexture;
//showTexture.playing = autoplayvideo;

function resetParty() {

  crowdsoundsource.playOnce()

  for(let entity of fireworkGroup.entities) {
    engine.removeEntity(entity)
  }
  for(let entity of confettiGroup.entities) {
    engine.removeEntity(entity)
  }
  for(let soundentity of fireworkSoundGroup.entities) {
    engine.removeEntity(soundentity);
  }
  fireworkcounter = 0
  confetticounter = 0
  for (let i=0;i<=50;i++) {
    addOneConfetti()
  }
  addFireworks(15)
}

const floorBaseGrass_01 = new Entity();
floorBaseGrass_01.setParent(stadiumscene)
const gltfShape = new GLTFShape("models/stadium/FloorBaseGrass_01/FloorBaseGrass_01.glb");
floorBaseGrass_01.addComponentOrReplace(gltfShape);
const transform_2 = new Transform({
  position: new Vector3(-8,0,16),
  rotation: new Quaternion(0,0,0,1),
  scale: new Vector3(3,1,2),
});
floorBaseGrass_01.addComponentOrReplace(transform_2)
//engine.addEntity(floorBaseGrass_01);


const stadium = new Entity()
stadium.setParent(stadiumscene)
/*
const fireworksound = new AudioClip('sounds/firework.mp3')
const fireworksoundsource = new AudioSource(fireworksound)
stadium.addComponent(fireworksoundsource)
*/
//const stadiumShape = new GLTFShape("models/stadium/stadium_v3.glb") //no entrance
//const stadiumShape = new GLTFShape("models/stadium/stadium_v4.glb") //corner entrances
const stadiumShape = new GLTFShape("models/stadium/stadium_v7.glb") //front entrance
stadium.addComponentOrReplace(stadiumShape);
const stadiumTransform = new Transform({
  position: new Vector3(13, 0, 31.5),
  //rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.18, 0.18, 0.16),
});
stadium.addComponentOrReplace(stadiumTransform)
//engine.addEntity(stadium)

const stadiumfloor = new Entity()
stadiumfloor.setParent(stadiumscene)
stadiumfloor.addComponent(new NFTShape("ethereum://0xd07dc4262bcdbf85190c01c996b4c06a461d2430/7636", Color3.White())); //ethereum logo best
//stadiumfloor.addComponent(new NFTShape("ethereum://0xd07dc4262bcdbf85190c01c996b4c06a461d2430/48775", Color3.White())); //so sick best yet
//stadiumfloor.addComponent(new NFTShape("ethereum://0xd07dc4262bcdbf85190c01c996b4c06a461d2430/25864", Color3.White())); //hyperloop kinda cool
//stadiumfloor.addComponent(new NFTShape("ethereum://0xd07dc4262bcdbf85190c01c996b4c06a461d2430/3616", Color3.White())); //SWORD meh
//stadiumfloor.addComponent(new NFTShape("ethereum://0x6a5ff3ceecae9ceb96e6ac6c76b82af8b39f0eb3/5770", Color3.White())); //traveling universe is also pretty cool
//stadiumfloor.addComponent(new NFTShape("ethereum://0xa7823d6fdb8c3d522fc5720e4a4f5f1f0352567c/10042", Color3.White())); //dragon meh
//stadiumfloor.addComponent(new NFTShape("ethereum://0xd07dc4262bcdbf85190c01c996b4c06a461d2430/4231", Color3.White())); //electric cell meh
//stadiumfloor.addComponent(new NFTShape("ethereum://0xd07dc4262bcdbf85190c01c996b4c06a461d2430/47626", Color3.White())); //this looks cooler than expected
//stadiumfloor.addComponent(new NFTShape("ethereum://0xa84fc8bbc9e1f7ecc2b4e9e1f879d806d5384869/17", Color3.White())); //ghost not bad
//stadiumfloor.addComponent(new NFTShape("ethereum://0xd35b1513de59d4a3148ec54f7968a86baa3dda96/1", Color3.White())); //fear poor resolution
//stadiumfloor.addComponent(new NFTShape("ethereum://0xd07dc4262bcdbf85190c01c996b4c06a461d2430/48777", Color3.White())); //awesome
//stadiumfloor.addComponent(new NFTShape("ethereum://0xd07dc4262bcdbf85190c01c996b4c06a461d2430/48783", Color3.White())); //pretty cool
//stadiumfloor.addComponent(new NFTShape("ethereum://0xd07dc4262bcdbf85190c01c996b4c06a461d2430/41864", Color3.White())); //it only takes up a corner

const stadiumfloorTransform = new Transform({
  position: new Vector3(-6,0.01,16),
  rotation: Quaternion.Euler(90,0,90),
  scale: new Vector3(55,55,1)
})
stadiumfloor.addComponent(stadiumfloorTransform) 
const stadiumfloorMaterial = new Material()
//stadiumfloorMaterial.metallic = 0
//stadiumfloorMaterial.roughness = 1
//stadiumfloorMaterial.albedoTexture = stadiumfloorTexture
//stadiumfloor.addComponent(stadiumfloorMaterial)
//engine.addEntity(stadiumfloor)

/* cryptomorph hig res img
const stadiumfloor = new Entity()
stadiumfloor.setParent(stadiumscene)
const stadiumfloorShape = new PlaneShape()
stadiumfloor.addComponent(stadiumfloorShape) 
const stadiumfloorTransform = new Transform({
  position: new Vector3(-7.975,0.1,15.9575), //x is front to back with higher number pushing away from stage. z is left to right with higher number pushing right
  rotation: Quaternion.Euler(90,0,90),
  scale: new Vector3(31.05,31.05,1) //x is width
})
stadiumfloor.addComponent(stadiumfloorTransform) 
const stadiumfloorTexture = new Texture("models/stadium/1.png")
const stadiumfloorMaterial = new Material()
stadiumfloorMaterial.metallic = 0
stadiumfloorMaterial.roughness = 1
stadiumfloorMaterial.albedoTexture = stadiumfloorTexture
stadiumfloor.addComponent(stadiumfloorMaterial)
//engine.addEntity(stadiumfloor)
*/

let logo1PosX = 13
let logo1PosY = 0.7
let logo1PosZ = 10.7

const NFTWorldLogo1 = new Entity()
NFTWorldLogo1.setParent(stadiumscene)
const NFTWorldLogoShape1 = new GLTFShape("models/stadium/NFTWorldLogo_anim20s.glb")
NFTWorldLogo1.addComponentOrReplace(NFTWorldLogoShape1)
NFTWorldLogo1.addComponent(
  new OnPointerDown(() => {
    resetParty()
    /*
    if(!showTexture.playing) {
      showTexture.playing = true
    }
    */
  })
)
const NFTWorldLogoTransform1 = new Transform({
  position: new Vector3(logo1PosX,0.9+logo1PosY,logo1PosZ),
  rotation: Quaternion.Euler(0,0,0),
  scale: new Vector3(0.3,0.6,0.3),
});
NFTWorldLogo1.addComponentOrReplace(NFTWorldLogoTransform1)
//engine.addEntity(NFTWorldLogo1)

const NFTWorldBox1 = new Entity()
NFTWorldBox1.setParent(stadiumscene)
const NFTWorldBoxShape1 = new GLTFShape("models/stadium/NFTWorldLogoBox.glb")
NFTWorldBox1.addComponentOrReplace(NFTWorldBoxShape1)
NFTWorldBox1.addComponent(
  new OnPointerDown(() => {
    resetParty()
    /*
    if(!showTexture.playing) {
      showTexture.playing = true
    }
    */
  })
)
const NFTWorldBoxTransform1 = new Transform({
  position: new Vector3(logo1PosX,0.1+logo1PosY,logo1PosZ),
  rotation: Quaternion.Euler(0,0,0),
  scale: new Vector3(0.75,0.75,0.75),
});
NFTWorldBox1.addComponentOrReplace(NFTWorldBoxTransform1)
//engine.addEntity(NFTWorldBox1)

let logo2PosX = 13
let logo2PosY = 0.7
let logo2PosZ = 21.2

const NFTWorldLogo2 = new Entity()
NFTWorldLogo2.setParent(stadiumscene)
const NFTWorldLogoShape2 = new GLTFShape("models/stadium/NFTWorldLogo_anim20s.glb")
NFTWorldLogo2.addComponentOrReplace(NFTWorldLogoShape2)
NFTWorldLogo2.addComponent(
  new OnPointerDown(() => {
    resetParty()
    /*
    if(!showTexture.playing) {
      showTexture.playing = true
    }
    */
  })
)
const NFTWorldLogoTransform2 = new Transform({
  position: new Vector3(logo2PosX,0.9+logo2PosY,logo2PosZ),
  rotation: Quaternion.Euler(0,0,0),
  scale: new Vector3(0.3,0.6,0.3),
});
NFTWorldLogo2.addComponentOrReplace(NFTWorldLogoTransform2)
//engine.addEntity(NFTWorldLogo2)

const NFTWorldBox2 = new Entity()
NFTWorldBox2.setParent(stadiumscene)
const NFTWorldBoxShape2 = new GLTFShape("models/stadium/NFTWorldLogoBox.glb")
NFTWorldBox2.addComponentOrReplace(NFTWorldBoxShape2)
NFTWorldBox2.addComponent(
  new OnPointerDown(() => {
    resetParty()
    /*
    if(!showTexture.playing) {
      showTexture.playing = true
    }
    */
  })
)
const NFTWorldBoxTransform2 = new Transform({
  position: new Vector3(logo2PosX,0.1+logo2PosY,logo2PosZ),
  rotation: Quaternion.Euler(0,0,0),
  scale: new Vector3(0.75,0.75,0.75),
});
NFTWorldBox2.addComponentOrReplace(NFTWorldBoxTransform2)
//engine.addEntity(NFTWorldBox2)

var entrancetextXpos = 13
var entrancetextZpos = 15.95
var entrancetextYadj = -1
var entrancetextScale = 1.5
var entrancetextScaleadj = 0.3

const welcometotext = new Entity()
welcometotext.setParent(stadiumscene)
const welcometotextShape = new TextShape("Welcome to")
welcometotextShape.color = Color3.Black()
welcometotextShape.font = new Font(Fonts.LiberationSans)
welcometotext.addComponent(welcometotextShape)
const welcometotextTransform = new Transform({
  position: new Vector3(entrancetextXpos,7.5+entrancetextYadj,entrancetextZpos),
  rotation: Quaternion.Euler(0,-90,0),
  scale: new Vector3(entrancetextScale,entrancetextScale,entrancetextScale)
})
welcometotext.addComponent(welcometotextTransform) 

//entrance

const nftworldtext = new Entity()
nftworldtext.setParent(stadiumscene)
const nftworldtextShape = new TextShape("NFT World Stadium")
nftworldtextShape.color = Color3.Black()
nftworldtextShape.font = new Font(Fonts.SanFrancisco_Heavy)
nftworldtext.addComponent(nftworldtextShape)
const nftworldtextTransform = new Transform({
  position: new Vector3(entrancetextXpos,6.1+entrancetextYadj,entrancetextZpos),
  rotation: Quaternion.Euler(0,-90,0),
  scale: new Vector3(entrancetextScale-entrancetextScaleadj,entrancetextScale-entrancetextScaleadj,entrancetextScale-entrancetextScaleadj)
})
nftworldtext.addComponent(nftworldtextTransform) 

@Component("crowdSoundFlag")
export class CrowdSoundFlag {}
const crowdSoundGroup = engine.getComponentGroup(CrowdSoundFlag)

  const crowdsound = new AudioClip('models/stadium/sounds/crowd2.mp3')
  const crowdsoundsource = new AudioSource(crowdsound)
  crowdsoundsource.volume = 1
  
nftworldtext.addComponent(crowdsoundsource)
crowdsoundsource.playing=true

//left outside
const nftworldtext2 = new Entity()
nftworldtext2.setParent(stadiumscene)
const nftworldtextShape2 = new TextShape("NFT World Stadium")
nftworldtextShape2.color = Color3.Black()
nftworldtextShape2.font = new Font(Fonts.SanFrancisco_Heavy)
nftworldtext2.addComponent(nftworldtextShape2)
const nftworldtextTransform2 = new Transform({
  position: new Vector3(-7,5,0.4),
  rotation: Quaternion.Euler(0,0,0),
  scale: new Vector3(entrancetextScale-entrancetextScaleadj,entrancetextScale-entrancetextScaleadj,entrancetextScale-entrancetextScaleadj)
})
nftworldtext2.addComponent(nftworldtextTransform2) 

//left inside
const nftworldtext3 = new Entity()
nftworldtext3.setParent(stadiumscene)
const nftworldtextShape3 = new TextShape("NFT World Stadium")
nftworldtextShape3.color = Color3.Black()
nftworldtextShape3.font = new Font(Fonts.SanFrancisco_Heavy)
nftworldtext3.addComponent(nftworldtextShape3)
const nftworldtextTransform3 = new Transform({
  position: new Vector3(-7,5,0.5),
  rotation: Quaternion.Euler(0,180,0),
  scale: new Vector3(entrancetextScale-entrancetextScaleadj,entrancetextScale-entrancetextScaleadj,entrancetextScale-entrancetextScaleadj)
})
nftworldtext3.addComponent(nftworldtextTransform3) 

//right outside
const nftworldtext4 = new Entity()
nftworldtext4.setParent(stadiumscene)
const nftworldtextShape4 = new TextShape("NFT World Stadium")
nftworldtextShape4.color = Color3.Black()
nftworldtextShape4.font = new Font(Fonts.SanFrancisco_Heavy)
nftworldtext4.addComponent(nftworldtextShape4)
const nftworldtextTransform4 = new Transform({
  position: new Vector3(-7,5,31.6),
  rotation: Quaternion.Euler(0,180,0),
  scale: new Vector3(entrancetextScale-entrancetextScaleadj,entrancetextScale-entrancetextScaleadj,entrancetextScale-entrancetextScaleadj)
})
nftworldtext4.addComponent(nftworldtextTransform4) 

//right inside
const nftworldtext5 = new Entity()
nftworldtext5.setParent(stadiumscene)
const nftworldtextShape5 = new TextShape("NFT World Stadium")
nftworldtextShape5.color = Color3.Black()
nftworldtextShape5.font = new Font(Fonts.SanFrancisco_Heavy)
nftworldtext5.addComponent(nftworldtextShape5)
const nftworldtextTransform5 = new Transform({
  position: new Vector3(-7,5,31.4),
  rotation: Quaternion.Euler(0,0,0),
  scale: new Vector3(entrancetextScale-entrancetextScaleadj,entrancetextScale-entrancetextScaleadj,entrancetextScale-entrancetextScaleadj)
})
nftworldtext5.addComponent(nftworldtextTransform5) 

const playIconTexture = new Texture("models/stadium/video_play_icon2.png")
const BRplayicon = new Texture("models/stadium/BR_playicon.png")

const BRClip = new VideoClip("https://dclhost.com/videos/BattleRacers/BR_Trailer_Dec2019.mp4"); 
const BRTexture = new VideoTexture(BRClip)
const BRshow = new Entity()
BRshow.setParent(stadiumscene)
BRshow.addComponent(new PlaneShape())
BRshow.addComponent(
  new Transform({
    position: new Vector3(13.176,4.3,8.475),
    rotation: Quaternion.Euler(0,90,0),
    scale: new Vector3(3,1.5,1)
  })
)
const BRshowMaterial = new Material()
BRshowMaterial.metallic = 0
BRshowMaterial.roughness = 1
BRshowMaterial.albedoTexture = BRplayicon
BRshow.addComponent(BRshowMaterial)
BRshow.addComponent(
  new OnPointerDown(() => {
    BRshowMaterial.albedoTexture == BRplayicon ? BRshowMaterial.albedoTexture = BRTexture : BRshowMaterial.albedoTexture = BRplayicon
    BRshow2Material.albedoTexture == BRplayicon ? BRshow2Material.albedoTexture = BRTexture2 : BRshow2Material.albedoTexture = BRplayicon
    BRTexture.playing = !BRTexture.playing
    BRTexture2.playing = !BRTexture2.playing
    //showTexture.playing ? showTexture.playing = !showTexture.playing : ""
    //showTexture.playing ? showTexture.playing : !showTexture.playing
    //showTexture.volume = 0
    SoSTexture.playing ? SoSTexture.playing = !SoSTexture.playing : ""
    //MMTexture.playing ? MMTexture.playing = !MMTexture.playing : ""
  })
)
//engine.addEntity(SoSshow)
BRTexture.playing = false

//3d models at entrance

//const brlogowidthratio=232/100
//const brlogoScaleY=1
//const brlogowidthratio=770/1024
const brlogowidthratio=875/1024
const brlogoScaleY=3.5
const br3dModelAdPosX=entrancetextXpos+1
const br3dModelAdPosY=1.75
const br3dModelAdPosZ=entrancetextZpos-7.47

const br_sign = new Entity()
br_sign.setParent(stadiumscene)
const br_signShape = new PlaneShape()
br_sign.addComponent(br_signShape) 
br_sign.addComponent(
  new OnPointerDown(() => {
    openExternalURL("https://battleracers.io/?utm_source=nftworld&utm_medium=referral&utm_campaign=stadium&utm_content=decentraland")
  })
)
const br_signTransform = new Transform({
  position: new Vector3(13.176,br3dModelAdPosY,br3dModelAdPosZ),
  rotation: Quaternion.Euler(180,-90,0),
  scale: new Vector3(brlogoScaleY*brlogowidthratio,brlogoScaleY,1)
})

br_sign.addComponent(br_signTransform) 

const br_signTexture = new Texture("models/stadium/br_portrait6.png")
const br_signMaterial = new Material()
br_signMaterial.metallic = 0
br_signMaterial.roughness = 1
br_signMaterial.albedoTexture = br_signTexture
br_sign.addComponent(br_signMaterial)

const carParent9 = new Entity()
carParent9.setParent(stadiumscene)
const carParent9Transform = new Transform({
  position: new Vector3(14.1,0,8.45),
  rotation: Quaternion.Euler(0,25,0),
  scale: new Vector3(6,6,6)
})
carParent9.addComponentOrReplace(carParent9Transform) 
const carBody9 = new Entity()
carBody9.addComponent(new GLTFShape('models/stadium/BattleRacers/LuxCasing02E01.gltf'))
carBody9.addComponent(
  new OnPointerDown(() => {
    openExternalURL("https://battleracers.io/?utm_source=nftworld&utm_medium=referral&utm_campaign=stadium&utm_content=decentraland")
  })
)
carBody9.setParent(carParent9)
const carFront9 = new Entity()
carFront9.addComponent(new GLTFShape('models/stadium/BattleRacers/LuxBumper02E01.gltf')) 
carFront9.setParent(carParent9)
const carRear9 = new Entity()
carRear9.addComponent(new GLTFShape('models/stadium/BattleRacers/LuxSpoiler02E01.gltf'))
carRear9.setParent(carParent9)
const carWheels9 = new Entity()
carWheels9.addComponent(new GLTFShape('models/stadium/BattleRacers/LuxWheel02E01.gltf'))
carWheels9.setParent(carParent9)

//right side facing entrance

//const BRClip2 = new VideoClip("https://dclhost.com/videos/SynergyOfSerra/SoS_Trailer_short.mp4"); //there isnt a different video to play. Play the same one
const BRTexture2 = new VideoTexture(BRClip)
const BRshow2 = new Entity()
BRshow2.setParent(stadiumscene)
BRshow2.addComponent(new PlaneShape())
BRshow2.addComponent(
  new Transform({
    position: new Vector3(13.176,4.3,23.4),
    rotation: Quaternion.Euler(0,90,0),
    scale: new Vector3(3,1.5,1)
  })
)
const BRshow2Material = new Material()
BRshow2Material.metallic = 0
BRshow2Material.roughness = 1
BRshow2Material.albedoTexture = BRplayicon
BRshow2.addComponent(BRshow2Material)
BRshow2.addComponent(
  new OnPointerDown(() => {
    BRshowMaterial.albedoTexture == BRplayicon ? BRshowMaterial.albedoTexture = BRTexture : BRshowMaterial.albedoTexture = BRplayicon
    BRshow2Material.albedoTexture == BRplayicon ? BRshow2Material.albedoTexture = BRTexture2 : BRshow2Material.albedoTexture = BRplayicon
    BRTexture.playing = !BRTexture.playing
    BRTexture2.playing = !BRTexture2.playing
    //showTexture.playing ? showTexture.playing = !showTexture.playing : ""
    SoSTexture.playing ? SoSTexture.playing = !SoSTexture.playing : ""
    //MMTexture.playing ? MMTexture.playing = !MMTexture.playing : ""
  })
)
BRTexture2.playing = false

//const brlogo2widthratio=1024/1024
//const brlogo2widthratio=770/1024
const brlogo2widthratio=875/1024
const brlogo2ScaleY=3.5
const br3dModelAd2PosX=br3dModelAdPosX
const br3dModelAd2PosY=br3dModelAdPosY
const br3dModelAd2PosZ=br3dModelAdPosZ+14.96;

const br_sign2 = new Entity()
br_sign2.setParent(stadiumscene)
br_sign2.addComponent(br_signShape) 
br_sign2.addComponent(
  new OnPointerDown(() => {
    openExternalURL("https://battleracers.io/?utm_source=nftworld&utm_medium=referral&utm_campaign=stadium&utm_content=decentraland")
  })
)
const br_sign2Transform = new Transform({
  position: new Vector3(13.176,br3dModelAd2PosY,br3dModelAd2PosZ),
  rotation: Quaternion.Euler(180,-90,0),
  scale: new Vector3(brlogo2ScaleY*brlogo2widthratio,brlogo2ScaleY,1)
})

br_sign2.addComponent(br_sign2Transform) 

const br_sign2Texture = new Texture("models/stadium/br_portrait5.png")
const br_sign2Material = new Material()
br_sign2Material.metallic = 0
br_sign2Material.roughness = 1
br_sign2Material.albedoTexture = br_sign2Texture
br_sign2.addComponent(br_sign2Material)

//Jeep03E01.glb
const BRglb = new Entity()
BRglb.setParent(stadiumscene)
const BRglbShape = new GLTFShape("models/stadium/BattleRacers/Jeep03E01.glb")
BRglb.addComponentOrReplace(BRglbShape)
BRglb.addComponent(
  new OnPointerDown(() => {
    openExternalURL("https://battleracers.io/?utm_source=nftworld&utm_medium=referral&utm_campaign=stadium&utm_content=decentraland")
  })
)
const BRglbTransform = new Transform({
  position: new Vector3(14.1,0,br3dModelAd2PosZ),
  rotation: Quaternion.Euler(0,155,0),
  scale: new Vector3(6,6,6),
});
BRglb.addComponentOrReplace(BRglbTransform)

const SoSplayicon = new Texture("models/stadium/SoS_playicon.png")
const SoSClip = new VideoClip("https://dclhost.com/videos/SynergyOfSerra/SoS_Trailer_short.mp4"); //0:32 seconds
const SoSTexture = new VideoTexture(SoSClip)
const SoSshow = new Entity()
SoSshow.setParent(stadiumscene)
SoSshow.addComponent(new PlaneShape())
SoSshow.addComponent(
  new Transform({
    position: new Vector3(12.5,4.3,26.125),
    //rotation: Quaternion.Euler(180,-60,0), //correct playicon image but video upside down
    rotation: Quaternion.Euler(0,60,0), //turned image upside down in photoshop
    scale: new Vector3(3,1.5,1)
  })
)
const SoSshowMaterial = new Material()
SoSshowMaterial.metallic = 0
SoSshowMaterial.roughness = 1
SoSshowMaterial.albedoTexture = SoSplayicon
SoSshow.addComponent(SoSshowMaterial)
SoSshow.addComponent(
  new OnPointerDown(() => {
    SoSshowMaterial.albedoTexture == SoSplayicon ? SoSshowMaterial.albedoTexture = SoSTexture : SoSshowMaterial.albedoTexture = SoSplayicon
    //showTexture.playing = !showTexture.playing
    SoSTexture.playing = !SoSTexture.playing
    //showTexture.playing ? showTexture.playing = !showTexture.playing : ""
    BRTexture.playing ? BRTexture.playing = !BRTexture.playing : ""
    BRTexture2.playing ? BRTexture2.playing = !BRTexture2.playing : ""
    //MMTexture.playing ? MMTexture.playing = !MMTexture.playing : ""
  })
)
//engine.addEntity(SoSshow)
SoSTexture.playing = false

const soslogowidthratio=875/1024
const soslogoScaleY=3.5

const sos_sign = new Entity()
sos_sign.setParent(stadiumscene)
const sos_signShape = new PlaneShape()
sos_sign.addComponent(sos_signShape) 
sos_sign.addComponent(
  new OnPointerDown(() => {
    openExternalURL("https://bit.ly/3kEZ16I")
  })
)
const sos_signTransform = new Transform({
  position: new Vector3(12.5,1.75,26.125),
  rotation: Quaternion.Euler(180,-60,0),
  scale: new Vector3(soslogoScaleY*soslogowidthratio,soslogoScaleY,1)
})

sos_sign.addComponent(sos_signTransform) 

const sos_signTexture = new Texture("models/stadium/SoS_NftWorld.jpg")
const sos_signMaterial = new Material()
sos_signMaterial.metallic = 0
sos_signMaterial.roughness = 1
sos_signMaterial.albedoTexture = sos_signTexture
sos_sign.addComponent(sos_signMaterial)
//engine.addEntity(sos_sign)

const SoS = new Entity()
SoS.setParent(stadiumscene)
//const SoSShape = new GLTFShape("models/stadium/lowpolybagnitest.glb")
const SoSShape = new GLTFShape("models/stadium/bagnitestriglow.glb")
SoS.addComponentOrReplace(SoSShape)
SoS.addComponent(
  new OnPointerDown(() => {
    openExternalURL("https://bit.ly/3kEZ16I")
  })
)
const SoSTransform = new Transform({
  position: new Vector3(logo2PosX-0.5,0.31+logo2PosY+1,logo2PosZ+5.5),
  rotation: Quaternion.Euler(0,60,0),
  scale: new Vector3(2,2,2),
});
SoS.addComponentOrReplace(SoSTransform)
//engine.addEntity(SoS)


const MMplayicon = new Texture("models/stadium/MM_playicon.png")
/*
const MMClip = new VideoClip("https://dclhost.com/videos/BattleRacers/BR_Trailer_Dec2019.mp4"); 
const MMTexture = new VideoTexture(MMClip)
*/
const MMshow = new Entity()
MMshow.setParent(stadiumscene)
MMshow.addComponent(new PlaneShape())
MMshow.addComponent(
  new Transform({
    position: new Vector3(12.4,4.3,5.75),
    rotation: Quaternion.Euler(0,123,0),
    scale: new Vector3(3,1.5,1)
  })
)
const MMshowMaterial = new Material()
MMshowMaterial.metallic = 0
MMshowMaterial.roughness = 1
MMshowMaterial.albedoTexture = MMplayicon
MMshow.addComponent(MMshowMaterial)
MMshow.addComponent(
  new OnPointerDown(() => {
    openExternalURL("https://medium.com/mutantmonsters/introduction-to-mutant-monsters-a18b1009fb26")
  })
)
//engine.addEntity(SoSshow)
//MMTexture.playing = false;

const mmlogowidthratio=875/1024
const mmlogoScaleY=3.5

const mm_sign = new Entity()
mm_sign.setParent(stadiumscene)
const mm_signShape = new PlaneShape()
mm_sign.addComponent(mm_signShape) 
mm_sign.addComponent(
  new OnPointerDown(() => {
    openExternalURL("https://medium.com/mutantmonsters/introduction-to-mutant-monsters-a18b1009fb26")
  })
)
const mm_signTransform = new Transform({
  position: new Vector3(12.4,1.75,5.75),
  rotation: Quaternion.Euler(180,237,0),
  scale: new Vector3(mmlogoScaleY*mmlogowidthratio,mmlogoScaleY,1)
})

mm_sign.addComponent(mm_signTransform) 

const mm_signTexture = new Texture("models/stadium/mm_portrait.png")
const mm_signMaterial = new Material()
mm_signMaterial.metallic = 0
mm_signMaterial.roughness = 1
mm_signMaterial.albedoTexture = mm_signTexture
mm_sign.addComponent(mm_signMaterial)

const mutantmonstersad = new Entity()
mutantmonstersad.setParent(stadiumscene)
mutantmonstersad.addComponent(new NFTShape("ethereum://0x3910d4afdf276a0dc8af632ccfceccf5ba04a3b7/683", Color3.White())); 
const mutantmonstersadTransform = new Transform({
  position: new Vector3(br3dModelAd2PosX-1,br3dModelAd2PosY-0.5,br3dModelAd2PosZ-18.2),
  rotation: Quaternion.Euler(0,-57,0),
  scale: new Vector3(3,3,1)
})
mutantmonstersad.addComponent(mutantmonstersadTransform) 
mutantmonstersad.addComponent(
  new OnPointerDown(() => {
    openExternalURL("https://medium.com/mutantmonsters/introduction-to-mutant-monsters-a18b1009fb26")
  })
)
const mutantmonstersadMaterial = new Material()
mutantmonstersadMaterial.metallic = 0
mutantmonstersadMaterial.roughness = 1
mutantmonstersad.addComponent(mutantmonstersadMaterial)

const mutantmonstersad_otherside = new Entity()
mutantmonstersad_otherside.setParent(mutantmonstersad)
mutantmonstersad_otherside.addComponent(new NFTShape("ethereum://0x3910d4afdf276a0dc8af632ccfceccf5ba04a3b7/683", Color3.White())); 
const mutantmonstersadothersideTransform = new Transform({
  position: new Vector3(0,0,0.01),
  rotation: Quaternion.Euler(0,180,0),
  scale: new Vector3(1,1,1)
})
mutantmonstersad_otherside.addComponent(mutantmonstersadothersideTransform) 
mutantmonstersad_otherside.addComponent(
  new OnPointerDown(() => {
    openExternalURL("https://medium.com/mutantmonsters/introduction-to-mutant-monsters-a18b1009fb26")
  })
)
mutantmonstersad_otherside.addComponent(mutantmonstersadMaterial)

let genre = "alternative_rock"

export class SimpleRotate implements ISystem {
  update() {
    let transform = mutantmonstersad.getComponent(Transform)
    transform.rotate(Vector3.Down(), 5)
    if(genre=="edm") {
      let transform2 = edm_symbol.getComponent(Transform)
      transform2.rotate(Vector3.Down(), 5)
    }
    if(genre=="alternative_rock") {
      let transform2 = alt_rock_symbol.getComponent(Transform)
      transform2.rotate(Vector3.Down(), 5)
    }
    if(genre=="chill") {
      let transform2 = chill_symbol.getComponent(Transform)
      transform2.rotate(Vector3.Down(), 5)
    }
    if(genre=="metal") {
      let transform2 = metal_symbol.getComponent(Transform)
      transform2.rotate(Vector3.Down(), 5)
    }
    if(genre=="pop") {
      let transform2 = pop_symbol.getComponent(Transform)
      transform2.rotate(Vector3.Down(), 5)
    }

  }
}
engine.addSystem(new SimpleRotate())
 let showTexture = "" //will make it a string
/*
function playVideo(file:string) {
log("Play video")
  let showClip = new VideoClip(file)
  let showTexture = new VideoTexture(showClip)
  showTexture.playing = autoplayvideo;

  const show = new Entity()
  show.setParent(stadiumscene)
  show.addComponent(new PlaneShape())
  show.addComponent(
    new Transform({
      position: new Vector3(-26,9,16),
      rotation: Quaternion.Euler(0,90,0),
      scale: new Vector3(22,11,1)
    })
  )
  const showMaterial = new Material()
  showMaterial.metallic = 0
  showMaterial.roughness = 1
  //showMaterial.texture = showTexture //doesnt work
  showMaterial.albedoTexture = showTexture
  show.addComponent(showMaterial)
  show.addComponent(
    new OnPointerDown(() => {
      showTexture.playing = !showTexture.playing
    })
  )
  
}
*/

let show = new Entity()
  show.setParent(stadiumscene)
  show.addComponent(new PlaneShape())
  show.addComponent(
    new Transform({
      position: new Vector3(-26,9,16),
      rotation: Quaternion.Euler(0,90,0),
      scale: new Vector3(22,11,1)
    })
  )

let showMaterial = new Material()
  showMaterial.metallic = 0
  showMaterial.roughness = 1
  show.addComponentOrReplace(showMaterial)

function playVideo(file:string) {
  //log("Play video")
  let showClip = new VideoClip(file)
  let showTexture = new VideoTexture(showClip)
  showTexture.playing = autoplayvideo;
  showMaterial.albedoTexture = showTexture
  show.addComponent(
    new OnPointerDown(() => {
      //showTexture.playing = !showTexture.playing //it causes the videos to overlap
      if(showTexture.volume==1) {
        showTexture.volume=0
      } else {
        showTexture.volume=1
      }
    })
  )
}



let pointer = -1;
let videos: string[]
let lengths: number[]

    switch(genre) { 
      case "alternative_rock": { 
        
        //cant use a multidimmensional array because there are two different data types. So using 2 separate arrays instead:
        videos = [
          "https://dclhost.com/music_videos/Alternative%20Rock/Beastie%20Boys%20-Sabotage.mp4",
          "https://dclhost.com/music_videos/Alternative%20Rock/Modest%20Mouse-Float%20On.mp4",
          "https://dclhost.com/music_videos/Alternative%20Rock/Stone%20Temple%20Pilots-Interstate%20Love%20Song.mp4",
          "https://dclhost.com/music_videos/Alternative%20Rock/Kings%20Of%20Leon-Use%20Somebody.mp4",
          "https://dclhost.com/music_videos/Alternative%20Rock/Franz%20Ferdinand-Take%20Me%20Out.mp4",
          "https://dclhost.com/music_videos/Alternative%20Rock/Linkin%20Park-One%20Step%20Closer.mp4",
          "https://dclhost.com/music_videos/Alternative%20Rock/Metric-Gold%20Guns%20Girls.mp4",
          "https://dclhost.com/music_videos/Alternative%20Rock/Nathaniel%20Rateliff-I%20Need%20Never%20Get%20Old.mp4",
          "https://dclhost.com/music_videos/Alternative%20Rock/No%20Doubt-Its%20My%20Life.mp4",
          "https://dclhost.com/music_videos/Alternative%20Rock/No%20Doubt-Spiderwebs.mp4",
          "https://dclhost.com/music_videos/Alternative%20Rock/OAR-That%20Was%20A%20Crazy%20Game%20of%20Poker.mp4",
          "https://dclhost.com/music_videos/Alternative%20Rock/Rise%20Against-Audience%20of%20One.mp4",
          "https://dclhost.com/music_videos/Alternative%20Rock/The%20Sounds-Ego.mp4",
          "https://dclhost.com/music_videos/Alternative%20Rock/The%20Sounds-Home%20is%20Where%20the%20Heart%20is.mp4",
          "https://dclhost.com/music_videos/Alternative%20Rock/The%20Sounds-Rock%20and%20Roll.mp4",
          "https://dclhost.com/music_videos/Alternative%20Rock/The%20Sounds-Underground.mp4",
          "https://dclhost.com/music_videos/Alternative%20Rock/The%20Weeks-Buttons.mp4",
          "https://dclhost.com/music_videos/Alternative%20Rock/Volbeat-Leviathan.mp4"]
        lengths=[181,213,210,228,273,434,291,288,258,264,766,237,276,297,277,259,289,305]        
      break; 
      } 
      case "edm": { 
        videos = ["https://dclhost.com/music_videos/EDM/Robyn - Indestructible (Fox Theater Feb 25, 2019)-wXmkFZJM0z4.mp4"]
        lengths=[260]
      break; 
     }
      case "chill": { 
        videos = ["https://dclhost.com/music_videos/Chill/Lana del Rey-Blue Jeans.mp4"]
        lengths=[216]
      break; 
    }
      case "metal": { 
        videos = ["https://dclhost.com/music_videos/Metal/Rob Zombie-Superbeast.mp4"]
        lengths=[220]
      break; 
    } 
      case "pop": { 
        videos = ["https://dclhost.com/music_videos/Pop/Gaslight Anthem-45.mp4"]
        lengths=[203]
      break; 
    } 
      default: { 
        videos = ["https://dclhost.com/videos/Flo%20Rida%20-%20'Club%20Can't%20Handle%20Me'%20(Live%20At%20The%20Summertime%20Ball%202016).mp4"]
        lengths=[253]
      break; 
      } 
    } 

let timerEntityArray:Entity[] = []

@Component("videotimerFlag")
export class VideoTimerFlag {}



function playVideos() {
/*
  if(timerEntityArray.length = 0){
    //log('need to remove entity')
    //log("timerEntityArray[pointer] is "+timerEntityArray[pointer])
    //log("timerEntityArray[pointer-1] is "+timerEntityArray[pointer-1])
    engine.removeEntity(timerEntityArray[pointer])
  }
  */

let videotimerGroup = engine.getComponentGroup(VideoTimerFlag)

  for(let entity of videotimerGroup.entities) {
    engine.removeEntity(entity)
  }

  let videoTimer = new Entity()
  videoTimer.addComponent(new VideoTimerFlag())

  engine.addEntity(videoTimer)
  timerEntityArray.push(videoTimer)

  pointer++
  //log("Pointer is now "+pointer)
  //log("videos.length is "+videos.length)
  if(pointer<=videos.length) {
    //log("Inside if")
  videoTimer.addComponentOrReplace(new utils.Delay(lengths[pointer]*1000,(()=>{
    //log("Delay")
    playVideos()
  })))
  playVideo(videos[pointer])
 } else {
   //log("Error")
 }
}
playVideos()

/*
const videoTimer = new Entity()

function playVideos() {
  pointer++
  log("Pointer is now "+pointer)
  log("videos.length is "+videos.length)
  if(pointer<=videos.length) {
    log("Inside if")
  videoTimer.addComponentOrReplace(new utils.Delay(lengths[pointer]*1000,(()=>{
    log("Delay")
    playVideos()
  })))
  //playVideo(videos[pointer])
 } else {
   log("Error")
 }
}

//videoTimer.setParent(stadiumscene)
engine.addEntity(videoTimer)
playVideos()
*/
/*
//This is called a Tuple but only works as a single variable, not as an array:
//const foo: [number, string] = [ 253, "https://dclhost.com/videos/Flo%20Rida%20-%20'Club%20Can't%20Handle%20Me'%20(Live%20At%20The%20Summertime%20Ball%202016).mp4" ];

const showClip = new VideoClip("https://dclhost.com/videos/Flo%20Rida%20-%20'Club%20Can't%20Handle%20Me'%20(Live%20At%20The%20Summertime%20Ball%202016).mp4")
//const showClip = new VideoClip("https://dclhost.com/videos/BR_Trailer_Dec2019.mp4"); //0:32 seconds

const showTexture = new VideoTexture(showClip)
const show = new Entity()
show.setParent(stadiumscene)
show.addComponent(new PlaneShape())
show.addComponent(
  new Transform({
    position: new Vector3(-26,9,16),
    rotation: Quaternion.Euler(0,90,0),
    scale: new Vector3(22,11,1)
  })
)
const showMaterial = new Material()
showMaterial.metallic = 0
showMaterial.roughness = 1
showMaterial.albedoTexture = showTexture
show.addComponent(showMaterial)
show.addComponent(
  new OnPointerDown(() => {
    showTexture.playing = !showTexture.playing
  })
)

showTexture.playing = autoplayvideo;
*/

const prevarrowwidthratio=860/1060
const prevarrowScaleY=1

const previous_arrow = new Entity()
previous_arrow.setParent(stadiumscene)
const previous_arrowShape = new PlaneShape()
previous_arrow.addComponent(previous_arrowShape) 
previous_arrow.addComponent(
  new OnPointerDown(() => {
    if(pointer>1) {
      pointer--
      pointer--
      playVideos()
    }
  })
)
const previous_arrowTransform = new Transform({
  position: new Vector3(-25.95,4,15.6),
  rotation: Quaternion.Euler(0,90,0),
  scale: new Vector3(prevarrowScaleY*prevarrowwidthratio,prevarrowScaleY,1)
})

previous_arrow.addComponent(previous_arrowTransform) 

const previous_arrowTexture = new Texture("models/stadium/previous_arrow.png")
const previous_arrowMaterial = new Material()
previous_arrowMaterial.metallic = 0
previous_arrowMaterial.roughness = 1
previous_arrowMaterial.albedoTexture = previous_arrowTexture
previous_arrow.addComponent(previous_arrowMaterial)

const nextarrowwidthratio=860/1060
const nextarrowScaleY=1

const next_arrow = new Entity()
next_arrow.setParent(stadiumscene)
const next_arrowShape = new PlaneShape()
next_arrow.addComponent(next_arrowShape) 
next_arrow.addComponent(
  new OnPointerDown(() => {
    if(pointer<videos.length) {
      //pointer++
      playVideos()
    }
  })
)
const next_arrowTransform = new Transform({
  position: new Vector3(-25.95,4,16.5),
  rotation: Quaternion.Euler(0,90,0),
  scale: new Vector3(nextarrowScaleY*nextarrowwidthratio,nextarrowScaleY,1)
})

next_arrow.addComponent(next_arrowTransform) 

const next_arrowTexture = new Texture("models/stadium/next_arrow.png")
const next_arrowMaterial = new Material()
next_arrowMaterial.metallic = 0
next_arrowMaterial.roughness = 1
next_arrowMaterial.albedoTexture = next_arrowTexture
next_arrow.addComponent(next_arrowMaterial)

const music_symbol_scale =  3
const music_symbol_posY =  1.65
let music_symbol_posZ =  11.5
const music_symbol_posZadj =  2.25

const edm_symbol = new Entity()
edm_symbol.setParent(stadiumscene)
const edm_symbolShape = new GLTFShape("models/stadium/Music_Genres_2/Music_Genres/unextracted/EDM_Music.glb") 
edm_symbol.addComponentOrReplace(edm_symbolShape);
const edm_symbolTransform = new Transform({
  position: new Vector3(-26,music_symbol_posY,music_symbol_posZ),
  rotation: Quaternion.Euler(0,90,0),
  scale: new Vector3(music_symbol_scale,music_symbol_scale,music_symbol_scale)
});
edm_symbol.addComponentOrReplace(edm_symbolTransform)
edm_symbol.addComponent(
  new OnPointerDown(() => {
    genre="edm"
  })
)
music_symbol_posZ+=music_symbol_posZadj

const alt_rock_symbol = new Entity()
alt_rock_symbol.setParent(stadiumscene)
const alt_rock_symbolShape = new GLTFShape("models/stadium/Music_Genres_2/Music_Genres/unextracted/Alt_Rock_Music.glb") 
alt_rock_symbol.addComponentOrReplace(alt_rock_symbolShape);
const alt_rock_symbolTransform = new Transform({
  position: new Vector3(-26,music_symbol_posY,music_symbol_posZ),
  rotation: Quaternion.Euler(0,90,0),
  scale: new Vector3(music_symbol_scale,music_symbol_scale,music_symbol_scale)
});
alt_rock_symbol.addComponentOrReplace(alt_rock_symbolTransform)
alt_rock_symbol.addComponent(
  new OnPointerDown(() => {
    genre="alternative_rock"
  })
)
music_symbol_posZ+=music_symbol_posZadj

const chill_symbol = new Entity()
chill_symbol.setParent(stadiumscene)
const chill_symbolShape = new GLTFShape("models/stadium/Music_Genres_2/Music_Genres/unextracted/Chill_Music.glb") 
chill_symbol.addComponentOrReplace(chill_symbolShape);
const chill_symbolTransform = new Transform({
  position: new Vector3(-26,music_symbol_posY,music_symbol_posZ),
  rotation: Quaternion.Euler(0,90,0),
  scale: new Vector3(music_symbol_scale,music_symbol_scale,music_symbol_scale)
});
chill_symbol.addComponentOrReplace(chill_symbolTransform)
chill_symbol.addComponent(
  new OnPointerDown(() => {
    genre="chill"
  })
)
music_symbol_posZ+=music_symbol_posZadj

const pop_symbol = new Entity()
pop_symbol.setParent(stadiumscene)
const pop_symbolShape = new GLTFShape("models/stadium/Music_Genres_2/Music_Genres/unextracted/Pop_Music.glb") 
pop_symbol.addComponentOrReplace(pop_symbolShape);
const pop_symbolTransform = new Transform({
  position: new Vector3(-26,music_symbol_posY,music_symbol_posZ),
  rotation: Quaternion.Euler(0,90,0),
  scale: new Vector3(music_symbol_scale,music_symbol_scale,music_symbol_scale)
});
pop_symbol.addComponentOrReplace(pop_symbolTransform)
pop_symbol.addComponent(
  new OnPointerDown(() => {
    genre="pop"
  })
)
music_symbol_posZ+=music_symbol_posZadj

const metal_symbol = new Entity()
metal_symbol.setParent(stadiumscene)
const metal_symbolShape = new GLTFShape("models/stadium/Music_Genres_2/Music_Genres/unextracted/Metal_Music.glb") 
metal_symbol.addComponentOrReplace(metal_symbolShape);
const metal_symbolTransform = new Transform({
  position: new Vector3(-26,music_symbol_posY,music_symbol_posZ),
  rotation: Quaternion.Euler(0,90,0),
  scale: new Vector3(music_symbol_scale,music_symbol_scale,music_symbol_scale)
});
metal_symbol.addComponentOrReplace(metal_symbolTransform)
metal_symbol.addComponent(
  new OnPointerDown(() => {
    genre="metal"
  })
)

@Component("subwoofercenterFlag")
export class SubwooferCenterFlag {}

@Component("subwooferinnerFlag")
export class SubwooferInnerFlag {}

@Component("subwooferouterFlag")
export class SubwooferOuterFlag {}
/*
function addSpeakerbox(color:string,speakerboxPosX:number,speakerboxPosY:number,speakerboxPosZ:number,speakerboxRot1:number,speakerboxRot2:number,speakerboxRot3:number,speakerboxScaleY:number,speakerboxScaleZ:number) {

  let speakerboxWidthRatio=1/10

  let speakerboxScaleX = speakerboxWidthRatio*speakerboxScaleY

  let subwooferouterScaleX=0.01*speakerboxScaleY
  let subwooferouterScaleY=subwooferouterScaleX
  let subwooferouterScaleZ=subwooferouterScaleX*3

  let subwooferinnerScaleX=subwooferouterScaleX*7.5
  let subwooferinnerScaleY=subwooferouterScaleX*7.5
  let subwooferinnerScaleZ=subwooferouterScaleX*7.5

  let subwoofercenterScaleX=subwooferouterScaleX*3
  let subwoofercenterScaleY=subwooferouterScaleX*3
  let subwoofercenterScaleZ=subwooferouterScaleX*3

  const speakerbox = new Entity()
  speakerbox.setParent(stadiumscene)
  speakerbox.addComponent(new BoxShape())
  const speakerboxMaterial = new Material()
  let speakerboxColor = Color3.FromHexString(color)
  speakerboxMaterial.albedoColor = speakerboxColor
  speakerboxMaterial.metallic = 0.5
  speakerboxMaterial.roughness = 0.1
  speakerbox.addComponent(speakerboxMaterial)
  speakerbox.addComponent(
    new Transform({
      position: new Vector3(speakerboxPosX,speakerboxPosY,speakerboxPosZ),
      rotation: Quaternion.Euler(speakerboxRot1,speakerboxRot2,speakerboxRot3),
      scale: new Vector3(speakerboxScaleX,speakerboxScaleY,speakerboxScaleZ)
    })
  )
  //engine.addEntity(speakerbox)

  const subwooferOuterAndCenterMaterial = new Material()
  //subwooferOuterAndCenterMaterial.albedoColor = Color3.Gray()
//subwooferOuterAndCenterMaterial.albedoColor = Color3.FromHexString("#5485a4")
subwooferOuterAndCenterMaterial.albedoColor = Color3.FromHexString("#ffffff")
  subwooferOuterAndCenterMaterial.metallic = 0
  subwooferOuterAndCenterMaterial.roughness = 1

  const subwooferInnerTexture = new Texture("models/stadium/subwoofer_material.jpg")
  const subwooferInnerMaterial = new Material()
  subwooferInnerMaterial.albedoTexture = subwooferInnerTexture

  const subwooferouter = new Entity()
  subwooferouter.addComponent(new SubwooferOuterFlag())
  subwooferouter.addComponent(new ConeShape())
  subwooferouter.addComponent(
    new Transform({
      position: new Vector3(0.5,-0.3,0),
      rotation: Quaternion.Euler(0,0,90),
      scale: new Vector3(subwooferouterScaleX,subwooferouterScaleY,subwooferouterScaleZ)
    })
  )
  subwooferouter.addComponent(subwooferOuterAndCenterMaterial)
  subwooferouter.setParent(speakerbox)

  const subwooferinner = new Entity()
  subwooferinner.addComponent(new SubwooferInnerFlag())
  subwooferinner.addComponent(new ConeShape())
  subwooferinner.addComponent(
    new Transform({
      position: new Vector3(0,-0.4,0),
      rotation: Quaternion.Euler(0,0,0),
      scale: new Vector3(subwooferinnerScaleX,subwooferinnerScaleY,subwooferinnerScaleZ)
    })
  )
  subwooferinner.addComponent(subwooferInnerMaterial)
  subwooferinner.setParent(subwooferouter)

  const subwoofercenter = new Entity()
  subwoofercenter.addComponent(new SubwooferCenterFlag())
  subwoofercenter.addComponent(new SphereShape())
  subwoofercenter.addComponent(
    new Transform({
      position: new Vector3(0,-1.1,0),
      rotation: Quaternion.Euler(0,0,0),
      scale: new Vector3(subwoofercenterScaleX,subwoofercenterScaleY,subwoofercenterScaleZ)
    })
  )
  subwoofercenter.addComponent(subwooferOuterAndCenterMaterial)
  subwoofercenter.setParent(subwooferinner)

} //function

addSpeakerbox("#2f2f2f",-23.5,-0.5,6,180,0,0,10,3) //left front
addSpeakerbox("#2f2f2f",-25,3.7,6,180,0,0,10,3) //left back

addSpeakerbox("#2f2f2f",-23.5,-0.5,26,180,0,0,10,3) //right front
addSpeakerbox("#2f2f2f",-25,3.7,26,180,0,0,10,3) //right back
*/

function addSpeakerbox(color:string,speakerboxPosX:number,speakerboxPosY:number,speakerboxPosZ:number,speakerboxRot1:number,speakerboxRot2:number,speakerboxRot3:number,speakerboxScale:number) {


  let subwooferouterScaleX=0.01*speakerboxScale
  let subwooferouterScaleY=subwooferouterScaleX
  let subwooferouterScaleZ=subwooferouterScaleX*3

  let subwooferinnerScaleX=subwooferouterScaleX*7.5
  let subwooferinnerScaleY=subwooferouterScaleX*7.5
  let subwooferinnerScaleZ=subwooferouterScaleX*7.5

  let subwoofercenterScaleX=subwooferouterScaleX*3
  let subwoofercenterScaleY=subwooferouterScaleX*3
  let subwoofercenterScaleZ=subwooferouterScaleX*3

  const speakerbox = new Entity()
speakerbox.setParent(stadiumscene)
const speakerboxShape = new GLTFShape("models/stadium/speakers.glb") 
speakerbox.addComponentOrReplace(speakerboxShape);
const speakerboxTransform = new Transform({
  position: new Vector3(speakerboxPosX,speakerboxPosY,speakerboxPosZ),
  rotation: Quaternion.Euler(speakerboxRot1,speakerboxRot2+90,speakerboxRot3),
  scale: new Vector3(speakerboxScale,speakerboxScale,speakerboxScale)
});
speakerbox.addComponentOrReplace(speakerboxTransform)
/*

  const subwooferOuterAndCenterMaterial = new Material()
  //subwooferOuterAndCenterMaterial.albedoColor = Color3.Gray()
//subwooferOuterAndCenterMaterial.albedoColor = Color3.FromHexString("#5485a4")
subwooferOuterAndCenterMaterial.albedoColor = Color3.FromHexString("#ffffff")
  subwooferOuterAndCenterMaterial.metallic = 0
  subwooferOuterAndCenterMaterial.roughness = 1

  const subwooferInnerTexture = new Texture("models/stadium/subwoofer_material.jpg")
  const subwooferInnerMaterial = new Material()
  subwooferInnerMaterial.albedoTexture = subwooferInnerTexture

  const subwooferouter = new Entity()
  subwooferouter.addComponent(new SubwooferOuterFlag())
  subwooferouter.addComponent(new ConeShape())
  subwooferouter.addComponent(
    new Transform({
      position: new Vector3(0.5,-0.3,0),
      rotation: Quaternion.Euler(0,0,90),
      scale: new Vector3(subwooferouterScaleX,subwooferouterScaleY,subwooferouterScaleZ)
    })
  )
  subwooferouter.addComponent(subwooferOuterAndCenterMaterial)
  subwooferouter.setParent(speakerbox)

  const subwooferinner = new Entity()
  subwooferinner.addComponent(new SubwooferInnerFlag())
  subwooferinner.addComponent(new ConeShape())
  subwooferinner.addComponent(
    new Transform({
      position: new Vector3(0,-0.4,0),
      rotation: Quaternion.Euler(0,0,0),
      scale: new Vector3(subwooferinnerScaleX,subwooferinnerScaleY,subwooferinnerScaleZ)
    })
  )
  subwooferinner.addComponent(subwooferInnerMaterial)
  subwooferinner.setParent(subwooferouter)

  const subwoofercenter = new Entity()
  subwoofercenter.addComponent(new SubwooferCenterFlag())
  subwoofercenter.addComponent(new SphereShape())
  subwoofercenter.addComponent(
    new Transform({
      position: new Vector3(0,-1.1,0),
      rotation: Quaternion.Euler(0,0,0),
      scale: new Vector3(subwoofercenterScaleX,subwoofercenterScaleY,subwoofercenterScaleZ)
    })
  )
  subwoofercenter.addComponent(subwooferOuterAndCenterMaterial)
  subwoofercenter.setParent(subwooferinner)
*/
} //function

//addSpeakerbox(color:string,speakerboxPosX:number,speakerboxPosY:number,speakerboxPosZ:number,speakerboxRot1:number,speakerboxRot2:number,speakerboxRot3:number,speakerboxScale:number)
addSpeakerbox("#2f2f2f",-23.5,7.8,5.6,180,0,0,2) //left front
//addSpeakerbox("#2f2f2f",-25,3.7,6,180,0,0,1) //left back

addSpeakerbox("#2f2f2f",-23.5,7.8,26.4,180,0,0,2) //right front
//addSpeakerbox("#2f2f2f",-25,3.7,26,180,0,0,1) //right back


function getRandomNumber(min, max) {
  return Math.random() * (max - min) + min
}

function getRandomInteger(min, max) {
  return Math.round(Math.random() * (max - min) + min)
}

const subwooferinnerGroup = engine.getComponentGroup(SubwooferInnerFlag)
const subwoofercenterGroup = engine.getComponentGroup(SubwooferCenterFlag)
const subwooferouterGroup = engine.getComponentGroup(SubwooferOuterFlag)

export class PoundingBass implements ISystem {
  async update() {
    /*
    if(showTexture.playing==false) { 
      //engine.removeSystem(this);
      return;
    }
    */
    //log(myVideoTexture1.seek)
    //log(myVideoTexture1.volume)
    //log(myVideoTexture1.playing)
    
    var rand=getRandomNumber(-0.01,0.01)
    
    for(let entity of subwooferinnerGroup.entities) {

      var transform = entity.getComponent(Transform)
      var scaleX=transform.scale.x
      var scaleY=transform.scale.y
      var scaleZ=transform.scale.z

      if (scaleX>0.77 || scaleX<0.74) {

        for(let entity of subwooferinnerGroup.entities) {
          entity.getComponent(Transform).scale.set(0.75,0.75,0.75) 
        }
        for(let entity of subwoofercenterGroup.entities) {
          entity.getComponent(Transform).scale.set(0.3,0.3,0.3) 
        }
        for(let entity of subwooferouterGroup.entities) {
          entity.getComponent(Transform).scale.set(0.1,0.1,0.3) 
        }
        
      } else {

        entity.getComponent(Transform).scale.set(scaleX+rand,scaleY+rand,scaleZ+rand) 

        for(let entity of subwoofercenterGroup.entities) {
          var transform = entity.getComponent(Transform)
          var scaleX=transform.scale.x
          var scaleY=transform.scale.y
          var scaleZ=transform.scale.z
          entity.getComponent(Transform).scale.set(scaleX+rand,scaleY+rand,scaleZ+rand) 
        }
        for(let entity of subwooferouterGroup.entities) {
          var transform = entity.getComponent(Transform)
          var scaleX=transform.scale.x
          var scaleY=transform.scale.y
          var scaleZ=transform.scale.z
          entity.getComponent(Transform).scale.set(scaleX+rand,scaleY+rand,scaleZ+rand) 
        }
      }
    }
  }
}

engine.addSystem(new PoundingBass())

@Component("fireworkFlag")
export class FireworkFlag {}
const fireworkGroup = engine.getComponentGroup(FireworkFlag)

@Component("fireworkSoundFlag")
export class FireworkSoundFlag {}
const fireworkSoundGroup = engine.getComponentGroup(FireworkSoundFlag)

function addFirework() {
  let x=-24 //to and away from the stage
  let y=17 
  let z=16 //left to right facing the stage
  let scale = getRandomNumber(0.01,0.03)
  let files: string[] = ["fireworkblue","fireworkgreen","fireworkorange","fireworkpurple","fireworkred","fireworkteal","fireworkyellow","fireworkyellow"]
  let file = getRandomInteger(0,files.length-1)
  //log(file)
  let filename = files[file]
  const firework = new Entity();
 firework.setParent(stadiumscene)
  const fireworkShape = new GLTFShape("models/stadium/"+filename+".glb");
  firework.addComponentOrReplace(fireworkShape);
  const fireworkTransform = new Transform({
  position: new Vector3(x+getRandomNumber(-2,33),y+getRandomNumber(0,8),z+getRandomNumber(-9,9)),
  rotation: Quaternion.Euler(0,0,0),
  scale: new Vector3(scale,scale,scale)
  });
  firework.addComponentOrReplace(fireworkTransform);
  firework.addComponent(new FireworkFlag())
  //engine.addEntity(firework)
}

var fireworkcounter=0;

function addFireworks(count:number) {
  for (let i=0;i<=count;i++) {
    addFirework()
   }
}

//dont shoot off fireworks by default in the private scene
addFireworks(15)

export class Fireworks implements ISystem {
  update(dt: number) {
    for(let entity of fireworkGroup.entities) {
      let fireworktransform = entity.getComponent(Transform)
      let scalespeed = getRandomNumber(0.01,0.03)
      let scalesize = getRandomNumber(0.5,3)
      if(fireworktransform.scale.x<scalesize) {
        fireworktransform.scale.x+=scalespeed
        fireworktransform.scale.y+=scalespeed
        fireworktransform.scale.z+=scalespeed
      } else {
        engine.removeEntity(entity);
        if(fireworkcounter<300) {
          addFirework();
          fireworkcounter++;
        } else {
          for(let soundentity of fireworkSoundGroup.entities) {
            engine.removeEntity(soundentity);
          }
        }
      }
    }
  }
}

engine.addSystem(new Fireworks());

const disco = new DiscoBall(new Vector3(-21,-0.4,3), 0.6, 18)
const disco2 = new DiscoBall(new Vector3(-22,-0.4,29), 0.6, 18)

@Component("confettiFlag")
export class ConfettiFlag {}
const confettiGroup = engine.getComponentGroup(ConfettiFlag)

var confetticounter = 0

function addOneConfetti() {
  let x=0
  let y=0
  let z=0

  const confetti = new Entity()
  confetti.setParent(stadiumscene)
  confetti.addComponent(new PlaneShape())
  const confettiMaterial = new Material()
  confettiMaterial.metallic = 0
  confettiMaterial.roughness = 1

  let confettiColors: string[] = ["#FF0000","#00FF00","#0000FF","#FF00FF","#FFFF00","#00FFFF"]
  let confettiColor = confettiColors[getRandomInteger(0,confettiColors.length-1)]
  confettiMaterial.albedoColor = Color3.FromHexString(confettiColor)

  confetti.addComponent(confettiMaterial)
  confetti.addComponent(new Transform({
    position: new Vector3(x+getRandomNumber(-26,10),y+getRandomNumber(20,35),z+getRandomNumber(1,31)),
    rotation: Quaternion.Euler(getRandomNumber(0,360),getRandomNumber(0,360),getRandomNumber(0,360)),
    scale: new Vector3(0.5,0.5,0.5)
    }))
    confetti.addComponent(new ConfettiFlag())
    //engine.addEntity(confetti)
    //log(confettiGroup.entities.length)
}

export class Confetti implements ISystem {
  update() {
    for(let entity of confettiGroup.entities) {
      var transform = entity.getComponent(Transform)
      var distance = Vector3.Down().scale(0.1)
      transform.translate(distance)
      if(transform.position.y <= 0) {
        engine.removeEntity(entity)
        if(confetticounter<100) {
          addOneConfetti()
          confetticounter++
        }
      }
    }
  }
}

engine.addSystem(new Confetti())

/* dont drop confetti by default in the private scene - why not? */
for (let i=0;i<=50;i++) {
  addOneConfetti()
}

function addAd(adWidthRatio:number,adYScale:number,adXPos:number,adYPos:number,adZPos:number,adRot1:number,adRot2:number,adRot3:number) {
  
  let adImages: string[] = ["nftworld_ad.jpg","MetaZone_Banner.png","dclplazas_ad.jpg","br_nftworld.png"]
  let randomInt = getRandomInteger(0,adImages.length-1)
  let adImage = adImages[randomInt]

  let adURLs: string[] = ["https://nftworld.io/?utm_source=nftworld&utm_medium=referral&utm_campaign=stadium&utm_content=decentraland","https://metazone.io/?utm_source=nftworld&utm_medium=referral&utm_campaign=stadium&utm_content=decentraland","https://dclplazas.com/?utm_source=nftworld&utm_medium=referral&utm_campaign=stadium&utm_content=decentraland","https://battleracers.io/?utm_source=nftworld&utm_medium=referral&utm_campaign=stadium&utm_content=decentraland"]
  let adURL = adURLs[randomInt]
  
  const ad = new Entity()
  ad.setParent(stadiumscene)
  ad.addComponent(new PlaneShape())

  ad.addComponent(
    new OnPointerDown(() => {
      openExternalURL(adURL)
    },{ distance: 20 })
  )

  const ad1Transform = new Transform({
    position: new Vector3(adXPos,adYPos,adZPos),
    rotation: Quaternion.Euler(adRot1,adRot2,adRot3),
    scale: new Vector3(adYScale*adWidthRatio,adYScale,1)
  });
  ad.addComponent(ad1Transform)
  const adMaterial = new Material()
  adMaterial.metallic = 0
  adMaterial.roughness = 1

  const ad1Texture = new Texture("models/stadium/ads/"+adImage)
  adMaterial.albedoTexture = ad1Texture
  ad.addComponent(adMaterial)
  //engine.addEntity(ad)

  const ad2 = new Entity()
  ad2.setParent(stadiumscene)
  ad2.addComponent(new PlaneShape())

  ad2.addComponent(
    new OnPointerDown(() => {
      openExternalURL(adURL)
    },{ distance: 20 })
  )

  const ad2Transform = new Transform({
    position: new Vector3(adXPos,adYPos,adZPos+0.1),
    rotation: Quaternion.Euler(adRot3,adRot2,adRot1),
    scale: new Vector3(adYScale*adWidthRatio,adYScale,1)
  });
  ad2.addComponent(ad2Transform)
  ad2.addComponent(adMaterial)
  //engine.addEntity(ad2)
}

let adsPosY = 6.3

//right side facing the stage

let adsRightPosX = 0
let adsRightPosZ = 31.5

addAd(468/60,1,adsRightPosX,adsPosY,adsRightPosZ,0,0,180)
addAd(468/60,1,adsRightPosX-8,adsPosY,adsRightPosZ,0,0,180)
addAd(468/60,1,adsRightPosX-16,adsPosY,adsRightPosZ,0,0,180)

//left side facing the stage

let adsLeftPosX = 0
let adsLeftPosZ = 0.5

addAd(468/60,1,adsLeftPosX,adsPosY,adsLeftPosZ,0,0,180)
addAd(468/60,1,adsLeftPosX-8,adsPosY,adsLeftPosZ,0,0,180)
addAd(468/60,1,adsLeftPosX-16,adsPosY,adsLeftPosZ,0,0,180)
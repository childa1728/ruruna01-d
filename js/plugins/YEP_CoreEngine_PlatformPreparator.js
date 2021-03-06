//=============================================================================
// Yanfly Engine Plugins - Core Engine
// YEP_CoreEngine_PlatformPreparator.js
// Version: 1.00
//=============================================================================

var Imported = Imported || {};
Imported.YEP_CoreEngine_PlatformPreparator = true;

var Yanfly = Yanfly || {};
Yanfly.Core = Yanfly.Core || {};

//=============================================================================
/*:
 * @plugindesc Needed for the majority of Yanfly Engine Scripts. Also
 * contains bug fixes found inherently in RPG Maker.
 * @author Yanfly Engine Plugins + Michael Dionne
 *
 * @param ---Screen---
 * @default
 *
 * @param Screen Width
 * @desc Adjusts the width of the screen.
 * Default: 816
 * @default 816
 *
 * @param Screen Height
 * @desc Adjusts the height of the screen.
 * Default: 624
 * @default 624
 *
 *
 * @param Open Console
 * @desc For testing and debug purposes, this opens up the console.
 * Don't Open - false     Open - true
 * @default false
 *
 * @param Reposition Battlers
 * @desc Allow the plugin to reposition battlers to resolution?
 * NO - false     YES - true
 * @default true
 *
 * @param ---Gold---
 * @desc
 *
 * @param Gold Max
 * @desc The maximum amount of gold the player can have.
 * Default: 99999999
 * @default 99999999
 *
 * @param Gold Font Size
 * @desc The font size used to display gold.
 * Default: 28
 * @default 20
 *
 * @param Gold Icon
 * @desc This will be the icon used to represent gold in the gold
 * window. If left at 0, no icon will be displayed.
 * @default 313
 *
 * @param Gold Overlap
 * @desc This will be what's displayed when the gold number
 * exceeds the allocated area's content size.
 * @default A lotta
 *
 * @param ---Items---
 * @desc
 *
 * @param Default Max
 * @desc This is the maximum number of items a player can hold.
 * Default: 99
 * @default 99
 *
 * @param Quantity Text Size
 * @desc This is the text's font size used for the item quantity.
 * Default: 28
 * @default 20
 *
 * @param ---Stats---
 * @default
 *
 * @param Max Level
 * @desc Adjusts the maximum level limit for actors.
 * Default: 99
 * @default 99
 *
 * @param Actor MaxHP
 * @desc Adjusts the maximum HP limit for actors.
 * Default: 9999
 * @default 9999
 *
 * @param Actor MaxMP
 * @desc Adjusts the maximum MP limit for actors.
 * Default: 9999
 * @default 9999
 *
 * @param Actor Parameter
 * @desc Adjusts the maximum parameter limit for actors.
 * Default: 999
 * @default 999
 *
 * @param Enemy MaxHP
 * @desc Adjusts the maximum HP limit for enemies.
 * Default: 999999
 * @default 999999
 *
 * @param Enemy MaxMP
 * @desc Adjusts the maximum MP limit for enemies.
 * Default: 9999
 * @default 9999
 *
 * @param Enemy Parameter
 * @desc Adjusts the maximum parameter limit for enemies.
 * Default: 999
 * @default 999
 *
 * @param ---Battle---
 * @desc
 *
 * @param Animation Rate
 * @desc Adjusts the rate of battle animations. Lower for faster.
 * Default: 4
 * @default 4
 *
 * @param Flash Target
 * @desc If an enemy is targeted, it flashes or it can whiten.
 * OFF - false     ON - true
 * @default false
 *
 * @param ---Font---
 * @desc
 *
 * @param Chinese Font
 * @desc Default font(s) used for a Chinese RPG.
 * Default: SimHei, Heiti TC, sans-serif
 * @default SimHei, Heiti TC, sans-serif
 *
 * @param Korean Font
 * @desc Default font(s) used for a Korean RPG.
 * Default: Dotum, AppleGothic, sans-serif
 * @default Dotum, AppleGothic, sans-serif
 *
 * @param Default Font
 * @desc Default font(s) used for everything else.
 * Default: GameFont
 * @default GameFont, Verdana, Arial, Courier New
 *
 * @param Font Size
 * @desc Default font size used for windows.
 * Default: 28
 * @default 28
 *
 * @param Text Align
 * @desc How to align the text for command windows.
 * left     center     right
 * @default left
 *
 * @param ---Windows---
 * @default
 *
 * @param Digit Grouping
 * @desc Groups together digits with a comma.
 * false - OFF     true - ON
 * @default true
 *
 * @param Line Height
 * @desc Adjusts universal line height used in Windows.
 * Default: 36
 * @default 36
 *
 * @param Icon Width
 * @desc Adjusts the width of your icons.
 * Default: 32
 * @default 32
 *
 * @param Icon Height
 * @desc Adjusts the height of your icons.
 * Default: 32
 * @default 32
 *
 * @param Face Width
 * @desc Adjusts the width of actors' faces.
 * Default: 144
 * @default 144
 *
 * @param Face Height
 * @desc Adjusts the height of actors' faces.
 * Default: 144
 * @default 144
 *
 * @param Window Padding
 * @desc Adjusts the padding for all standard windows.
 * Default: 18
 * @default 18
 *
 * @param Text Padding
 * @desc Adjusts the padding for text inside of windows.
 * Default: 6
 * @default 6
 *
 * @param Window Opacity
 * @desc Adjusts the background opacity for windows.
 * Default: 192
 * @default 192
 *
 * @param Gauge Outline
 * @desc Enable outlines for gauges.
 * false - OFF     true - ON
 * @default true
 *
 * @param Gauge Height
 * @desc Sets the height for gauges.
 * Default: 6
 * @default 18
 *
 * @param Menu TP Bar
 * @desc Draws a TP bar in the menu status for actors.
 * false - OFF     true - ON
 * @default true
 *
 * @param ---Window Colors---
 * @default
 *
 * @param Color: Normal
 * @desc Changes the text color for Windows.
 * Default: 0
 * @default 0
 *
 * @param Color: System
 * @desc Changes the text color for Windows.
 * Default: 16
 * @default 16
 *
 * @param Color: Crisis
 * @desc Changes the text color for Windows.
 * Default: 17
 * @default 17
 *
 * @param Color: Death
 * @desc Changes the text color for Windows.
 * Default: 18
 * @default 18
 *
 * @param Color: Gauge Back
 * @desc Changes the text color for Windows.
 * Default: 19
 * @default 19
 *
 * @param Color: HP Gauge 1
 * @desc Changes the text color for Windows.
 * Default: 20
 * @default 20
 *
 * @param Color: HP Gauge 2
 * @desc Changes the text color for Windows.
 * Default: 21
 * @default 21
 *
 * @param Color: MP Gauge 1
 * @desc Changes the text color for Windows.
 * Default: 22
 * @default 22
 *
 * @param Color: MP Gauge 2
 * @desc Changes the text color for Windows.
 * Default: 23
 * @default 23
 *
 * @param Color: MP Cost
 * @desc Changes the text color for Windows.
 * Default: 23
 * @default 23
 *
 * @param Color: Power Up
 * @desc Changes the text color for Windows.
 * Default: 24
 * @default 24
 *
 * @param Color: Power Down
 * @desc Changes the text color for Windows.
 * Default: 25
 * @default 25
 *
 * @param Color: TP Gauge 1
 * @desc Changes the text color for Windows.
 * Default: 28
 * @default 28
 *
 * @param Color: TP Gauge 2
 * @desc Changes the text color for Windows.
 * Default: 29
 * @default 29
 *
 * @param Color: TP Cost Color
 * @desc Changes the text color for Windows.
 * Default: 29
 * @default 29
 *
 *
 *
 *
 *
 *
 * @param ****************************
 * @desc
 * @default -
 *
 * @param ****************************
 * @desc
 * @default -
 *
 * @param ****************************
 * @desc
 * @default -
 *
 * @param ****************************
 * @desc
 * @default -
 *
 * @param **PLATFORM PREP.**
 * @desc
 * @default -
 *
 * @param Force Retina ON
 * @desc Set to 1 to double the resolution for forcing the simulation of a Retina display on any device. Def: 0
 * @default 0
 *
 * @param Custom Zoom Multiplier
 * @desc Set to 1 for 100% zoom, 0.5 for 200% zoom, 0.25 for 400% zoom, 1.5 for a 50% dezoom, 2 for a 25% dezoom, etc. Def: 1
 * @default 1
 *
 * @param ----- iOS
 * @desc
 * @default -
 *
 * @param iPhone4S
 * @desc 960x640/3:2. Test for iPhone4S.
 * @default 0
 *
 * @param iPhone5-5C-5S
 * @desc 1136x640/71:40. Test for iPhone5, Symbian3 (Nokia C7), MeeGo N9.
 * @default 0
 *
 * @param iPhone6-6S
 * @desc 1334x750/667:375. Test for iPhone6.
 * @default 0
 *
 * @param iPhone6-6S-Plus
 * @desc 2208x1242/16:9. Test for iPhone6 Plus.
 * @default 0
 *
 * @param iPad1-2
 * @desc 1024x768/4:3. Test for iPad & iPad 2. 
 * @default 0
 *
 * @param iPadMini
 * @desc 1024x768/4:3. Test for iPad Mini.
 * @default 0
 *
 * @param iPadPro
 * @desc 2732x2048/4:3. Test for iPad Pro.
 * @default 0
 *
 * @param iPad3-4-Air-Air2-Mini3
 * @desc 2048x1536/4:3. Test for iPad 3, iPad 4, iPad Air, iPad Air 2 & iPad Mini 3.
 * @default 0
 *
 * @param MacBookPro2012
 * @desc 1280x800/8:5. Test for MacBook Pro (mid-2012).
 * @default 0
 *
 * @param ----- Nintendo
 * @desc
 * @default -
 *
 * @param WiiUGamePad
 * @desc 800x480/5:3. Test for the WiiU GamePad.
 * @default 0
 *
 * @param ----- Facebook
 * @desc
 * @default -
 *
 * @param Facebook
 * @desc 760xVAR/VAR. Test for Facebook (framed). NOTE: Height is variable, depends on browser height.
 * @default 0
 *
 * @param ----- SymbianOS
 * @desc
 * @default -
 *
 * @param NokiaC7
 * @desc 640x360/16:9. Test for Nokia C7.
 * @default 0
 *
 * @param ----- Blackberry
 * @desc
 * @default -
 *
 * @param BlackberryPassport
 * @desc 1440x1440/1:1. Test for Blackberry Passport.
 * @default 0
 *
 * @param ----- Amazon
 * @desc
 * @default -
 *
 * @param KindleFireHDX89
 * @desc 2560x1600/8:5. Test for Kindle Fire HDX 8.9.
 * @default 0
 *
 * @param KindleFireHDX7
 * @desc 1920x1200/8:5. Test for Kindle Fire HDX 7.
 * @default 0
 *
 * @param FireHD6
 * @desc 1280x800/8:5. Test for Fire HD 6.
 * @default 0
 *
 * @param FireHD7
 * @desc 1280x800/8:5. Test for Fire HD 7.
 * @default 0
 *
 * @param Fire2015
 * @desc 1024x600/128:75. Test for Fire (2015).
 * @default 0
 *
 * @param FireHD82015
 * @desc 1280x800/8:5. Test for Fire HD 8 (2015).
 * @default 0
 *
 * @param FireHD102015
 * @desc 1280x800/8:5. Test for Fire HD 10 (2015).
 * @default 0
 *
 * @param ----- Microsoft
 * @desc
 * @default -
 *
 * @param SurfacePro3
 * @desc 2160x1440/3:2. Test for Surface Pro 3.
 * @default 0
 *
 * @param SurfaceRT
 * @desc 1366x768/683:384. Test for Surface RT.
 * @default 0
 *
 * @param SurfacePro
 * @desc 1920x1080/16:9. Test for Surface Pro.
 * @default 0
 *
 * @param ----- Barnes & Noble
 * @desc
 * @default -
 *
 * @param NookTablet
 * @desc 1024x600/128:75. Test for Nook Tablet.
 * @default 0
 *
 * @param NookHD
 * @desc 1440x900/8:5. Test for Nook HD.
 * @default 0
 *
 * @param NookHDplus
 * @desc 1920x1280/3:2. Test for Nook HD+.
 * @default 0
 *
 * @param ----- Kobo
 * @desc
 * @default -
 *
 * @param Arc7
 * @desc 1024x600/128:75. Test for Arc 7.
 * @default 0
 *
 * @param Arc7HD
 * @desc 1920x1200/8:5. Test for Arc 7 HD.
 * @default 0
 *
 * @param ----- Dell
 * @desc
 * @default -
 *
 * @param Venue7
 * @desc 1280x800/8:5. Test for Venue 7.
 * @default 0
 *
 * @param Venue8
 * @desc 1280x800/8:5. Test for Venue 8.
 * @default 0
 *
 * @param Latitude10
 * @desc 1366x768/683:384. Test for Latitude 10.
 * @default 0
 *
 * @param Venue11Pro
 * @desc 1920x1080/16:9. Test for Venue 11 Pro.
 * @default 0
 *
 * @param Venue11Pro7139
 * @desc 1920x1080/16:9. Test for Venue 11 Pro (7139).
 * @default 0
 *
 * @param ----- Samsung
 * @desc
 * @default -
 *
 * @param GalaxyTab3Lite7
 * @desc 1024x600/128:75. Test for Galaxy Tab 3 Lite 7.
 * @default 0
 *
 * @param GalaxyTab47
 * @desc 1280x800/8:5. Test for Galaxy Tab 4 7.
 * @default 0
 *
 * @param GalaxyTab38
 * @desc 1280x800/8:5. Test for Galaxy Tab 3 8.
 * @default 0
 *
 * @param GalaxyTab4Nook7
 * @desc 1280x800/8:5. Test for Galaxy Tab 4 Nook 7.
 * @default 0
 *
 * @param GalaxyNote8
 * @desc 1280x800/8:5. Test for Galaxy Note 8.
 * @default 0
 *
 * @param GalaxyTab48
 * @desc 1280x800/8:5. Test for Galaxy Tab 3 Lite 7.
 * @default 0
 *
 * @param GalaxyTabS84
 * @desc 2560x1600/8:5. Test for Galaxy Tab S 8.4.
 * @default 0
 *
 * @param GalaxyTabPro84
 * @desc 2560x1600/8:5. Test for Galaxy Tab Pro 8.4.
 * @default 0
 *
 * @param GalaxyTab2/3101
 * @desc 1280x800/8.5. Test for Galaxy Tab 2/3 10.1.
 * @default 0
 *
 * @param GalaxyTab4101
 * @desc 1280x800/8.5. Test for Galaxy Tab 4 10.1.
 * @default 0
 *
 * @param GalaxyTab4Nook101
 * @desc 1280x800/8.5. Test for Galaxy Tab 4 Nook 10.1.
 * @default 0
 *
 * @param GalaxyTabS105
 * @desc 2560x1600/8.5. Test for Galaxy Tab S 10.5.
 * @default 0
 *
 * @param GalaxyNote10.12014
 * @desc 2560x1600/8.5. Test for Galaxy Note 10.1 (2014).
 * @default 0
 *
 * @param GalaxyNotePro122
 * @desc 2560x1600/8.5. Test for Galaxy Note Pro 12.2.
 * @default 0
 *
 * @param ----- Google
 * @desc
 * @default -
 *
 * @param Nexus72012
 * @desc 1280x800/8.5. Test for Nexus 7 (2012).
 * @default 0
 *
 * @param Nexus72013
 * @desc 1920x1200/8.5. Test for Nexus 7 (July 30, 2013).
 * @default 0
 *
 * @param Nexus9
 * @desc 2048x1536/4:3. Test for Nexus 9.
 * @default 0
 *
 * @param Nexus102012
 * @desc 2560x1600/8:5. Test for Nexus 10 (2012).
 * @default 0
 *
 * @param ----- Archos
 * @desc
 * @default -
 *
 * @param 80Titanium
 * @desc 1024x768/4:3. Test for 80 Titanium.
 * @default 0
 *
 * @param 97Titanium
 * @desc 2048x1536/4:3. Test for 97 Titanium.
 * @default 0
 *
 * @param ----- Asus
 * @desc
 * @default -
 *
 * @param VivoTabNote8
 * @desc 1280x800/8:5. Test for Vivo Tab Note 8.
 * @default 0
 *
 * @param TransformerBookT100TA
 * @desc 1366x768/683:384. Test for Transformer Book T100TA.
 * @default 0
 *
 * @param AspireSwitch10
 * @desc 1366x768/683:384. Test for Aspire Switch 10.
 * @default 0
 *
 * @param TransformerPadInfinity
 * @desc 1920x1200/8:5. Test for Transformer Pad Infinity.
 * @default 0
 *
 * @param TransformerPadTF701T
 * @desc 2560x1600/8:5. Test for Transformer Pad TF701T.
 * @default 0
 *
 * @param ----- Lenovo
 * @desc
 * @default -
 *
 * @param Yoga8
 * @desc 1280x800/8:5. Test for Yoga 8.
 * @default 0
 *
 * @param Miix28
 * @desc 1280x800/8:5. Test for Miix 2 8.
 * @default 0
 *
 * @param Yoga10
 * @desc 1280x800/8:5. Test for Yoga 10.
 * @default 0
 *
 * @param YogaTablet2
 * @desc 1920x1080/16:9. Test for Yoga Tablet 2.
 * @default 0
 *
 * @param YogaTablet2Pro
 * @desc 2560x1440/16:9. Test for Yoga Tablet 2 Pro.
 * @default 0
 *
 * @param Yoga3Pro
 * @desc 3200x1800/16:9. Test for Yoga 3 Pro.
 * @default 0
 *
 * @param ----- Toshiba
 * @desc
 * @default -
 *
 * @param SatelliteRadiusP55W85224
 * @desc 1920x1080/16:9. Test for Satellite Radius P55W-85224.
 * @default 0
 *
 * @param ----- HP
 * @desc
 * @default -
 *
 * @param Slate8Pro
 * @desc 1600x1200/4:3. Test for Slate 8 Pro.
 * @default 0
 *
 * @param ElitePad
 * @desc 1280x800/8:5. Test for Elite Pad.
 * @default 0
 *
 * @param ----- Sony
 * @desc
 * @default -
 *
 * @param XperiaZ
 * @desc 1920x1200/8:5. Test for Xperia Z.
 * @default 0
 *
 * @param XperiaZ3TabletCompact
 * @desc 1920x1200/8:5. Test for Xperia Z3 Tablet Compact.
 * @default 0
 *
 * @param ----- Nvidia
 * @desc
 * @default -
 *
 * @param Shield
 * @desc 1920x1080/16:9. Test for Shield.
 * @default 0
 *
 * @param ----- LG
 * @desc
 * @default -
 *
 * @param GPad83
 * @desc 1920x1200/8:5. Test for G Pad 8.3.
 * @default 0
 *
 * @param ----- Fuhu
 * @desc
 * @default -
 *
 * @param NabiBigTabHD24
 * @desc 1920x1080/16:9. Test for Nabi Big Tab HD 24.
 * @default 0
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 * @help
 * ============================================================================
 * Introduction and Instructions
 * ============================================================================
 *
 * Yanfly Engine Plugins - Core Engine is made for RPG Maker MV. This plugin
 * functions primarily to fix bugs and to allow the user more control over RPG
 * Maker MV's various features, such as the screen resolution, font, window
 * colors, and more.
 *
 * Just place this on top of all the other Yanfly Engine Plugins.
 * Adjust any parameters as you see fit.
 *
 * ============================================================================
 * Bug Fixes
 * ============================================================================
 *
 * This plugin fixes a few bugs found present within RPG Maker MV. Of them are
 * the following:
 *
 * Animation Overlay
 *   When a skill/item that targets multiple enemies at once using a fullscreen
 *   animation, it will overlay multiple times causing the image to look
 *   distorted by a series of overlayed effects. The plugin fixes this issue by
 *   having only one animation played over the group instead of every one.
 *
 * Event Updating
 *   By default, a moving event at Frequency 5 stops briefly for a frame
 *   instead of continuously moving. The plugin fixes this issue to match the
 *   previous iterations of RPG Maker XP, RPG Maker VX, and RPG Maker VX Ace
 *   where the event will move nonstop.
 *
 * Event Movement Speed
 *   The movement speed of events are slightly slower than what they should be
 *   due a small error in the source code. The plugin fixes this issue and they
 *   move at the properly speed.
 *
 * Event Movement Queue
 *   If an event were to move through an event command, changing a condition
 *   that would set the event to change to a different page would cause that
 *   event's move route to halt in its tracks. The plugin fixes this issue and
 *   the event's move route will finish.
 *
 * Event Colliding
 *   Events cannot move over other events with a Below Player setting. This
 *   makes it difficult for certain types of puzzles or events to exist. This
 *   plugin fixes this issue by making the collision check only apply to events
 *   of "Same as Characters" priority. Any event that's above or below the
 *   characters will no longer collide with other events.
 *
 * Screen Tearing
 *   When moving slowly, the tiles on the screen tear. While it's not
 *   noticeable on all systems, slower computers will definitely show it. The
 *   plugin will fix this issue and synch the tiles to keep up to pace with
 *   the screen's camera movement properly.
 *
 * Sprite Distortion
 *   Because of JavaScript's strange mathematical behavior, sometimes values
 *   with decimal places cause spritesheets to end up looking distorted. The
 *   plugin will get rid of the decimal places and have sprite sheets take out
 *   frames properly by using integer values only.
 *
 * ============================================================================
 * Gold
 * ============================================================================
 *
 * You can use the plugin commands to add or remove gold more than the
 * editor's 9,999,999 limit. You can also place notetags into items, weapons,
 * and armors to over the 999,999 cost limit.
 *
 * Plugin Command:
 *   GainGold 1234567890       # Party gains 1234567890 gold.
 *   LoseGold 9876543210       # Party loses 9876543210 gold.
 *
 * Item, Weapon, Armor Notetags
 *   <Price: x>
 *   Changes the price of the item to x. This notetag allows you to bypass the
 *   editor's 999,999 gold cost limit.
 *
 * Enemy Notetag
 *   <Gold: x>
 *   Changes the gold drop value of enemies to x. This notetag allows you to
 *   bypass the editor's 9,999,999 gold drop limit.
 *
 * ============================================================================
 * Items
 * ============================================================================
 *
 * Change the parameters to reflect the maximum number of items a player can
 * hold per item. If you wish to make individual items have different max
 * values, use the following notetag:
 *
 * Item, Weapon, Armor Notetag:
 *   <Max Item: x>
 *   This changes the maximum amount of the item to x.
 *
 * ============================================================================
 * Stats
 * ============================================================================
 *
 * Even with the parameter limits raised, the editor is still confined to RPG
 * Maker MV's default limits. To break past them, use the following notetags
 * to allow further control over the individual aspects for the parameters.
 *
 * Actor Notetag
 *   <Initial Level: x>
 *   Changes the actor's initial level to x. This allows you to bypass the
 *   editor's level 99 limit.
 *
 *   <Max Level: x>
 *   Changes the actor's max level to x. This allows you to bypass the editor's
 *   level 99 limit.
 *
 * Class Skill Learn Notetag
 *   <Learn at Level: x>
 *   When placed inside a class's "Skills to Learn" notetag, this will cause
 *   the class to learn the skill at level x.
 *
 * Weapon and Armor Notetags
 *   <stat: +x>
 *   <stat: -x>
 *   Allows the piece of weapon or armor to gain or lose x amount of stat.
 *   Replace "stat" with "hp", "mp", "atk", "def", "mat", "mdf", "agi", or
 *   "luk" to alter that specific stat. This allows the piece of equipment
 *   to go past the editor's default limitation so long as the maximum value
 *   allows for it.
 *
 * Enemy Notetags
 *   <stat: x>
 *   This changes the enemy's stat to x amount. Replace "stat" with "hp",
 *   "mp", "atk", "def", "mat", "mdf", "agi", or "luk" to alter that
 *   specific stat. This allows the piece of equipment to go past the
 *   editor's default limitation.
 *
 *   <exp: x>
 *   This changes the enemy's exp given out to x amount. This allows the
 *   enemy give out more exp than the editor's default 9,999,999 limit.
 *
 *
 *
 *
 *
 ******************* Michael Dionne's modifications HELP ******************
 *
 *
 * This plugin modification gets rid of the black bars on all sides of the
 * screen by slightly adjusting the screen aspect ratio, in order to enjoy
 * real full screen on mobiles once your game is uploaded on your FTP web
 * server. On mobiles you won't be able to resize the app window by default,
 * so even if black bars appear during development on your desktop or laptop,
 * don't panic! It should STILL works and NOT show any black bars once the
 * proper "compiled" version of your web game runs on the proper mobile de-
 * vice.
 *
 * Some devices may have some other technical (software and/or hardware) cons-
 * traints, especially once uploaded on a web server (like via a ftp client).
 * Example, iOS is picky on textures size. Anything too big may not appear at
 * all (but without breaking anything, just blanks). This may be problematic
 * with Retina set to ON with battlebacks, but there is no way out of the box
 * with RPG Maker MV to break big battleback pictures in many smaller pieces
 * for iOS to digest. Maybe you could hire a scripter to develop this feature,
 * if that problem happens to you on some platforms.
 *
 * NOTE: If your title screen background image is not big enough, black
 * bars will still be visible. Ensure your title screen background is HUGE
 * for representative testing. Example, an all-grey 10 000px width * 10 000px
 * height .png picture.
 *
 * NOTE: If you changed graphics for any menus, like window backgrounds
 * (example via the use of such plugins), it is totally normal that they
 * will appear no more correctly. Chances are that they are not drawn big
 * enough for the current platform resolution and/or aspect ratio. I invite
 * you to use a plugin that can show up the debug console and tell you the name
 * and the size of all active Windows, like the wonderful Nasty_Replace_Window
 * plugin. It can really help you adapt your graphics from one compiled ver-
 * sion to another. Minimal efforts for fixing such visual issues is necessa-
 * ry from your part. The more devices/platforms you will want to support
 * the more work on fixing such visual issues you will need to plan to do.
 *
 * FOR ANY PROBLEM PLEASE CONTACT ME DIRECTLY AT: exotyktechnologies AT gmail
 * DOT com or PM me on the official RPG Maker MV Javascript releases forum.
 * Yanfly won't provide support for anything specific to my own modifications.
 *
 * All rights reserved to Yanfly for his BIG part of the code, and all rights
 * reserved to me for my own modifications. Since my modifications did not
 * worked reliably without full YEP_CoreEngine integration, I decided to
 * integrate it directly. You can replace the original YEP_CoreEngine plugin
 * by this version instead (you can turn that one OFF).
 *
 */
//=============================================================================

//=============================================================================
// Parameter Variables
//=============================================================================

Yanfly.Parameters = PluginManager.parameters('YEP_CoreEngine_PlatformPreparator');
Yanfly.Param = Yanfly.Param || {};
Yanfly.Icon = Yanfly.Icon || {};

Yanfly.Param.OpenConsole = String(Yanfly.Parameters['Open Console']);
Yanfly.Param.DigitGroup = String(Yanfly.Parameters['Digit Grouping']);
Yanfly.Param.MaxItem = Number(Yanfly.Parameters['Default Max']);
Yanfly.Param.MaxLevel = Number(Yanfly.Parameters['Max Level']);
Yanfly.Param.AnimationRate = Number(Yanfly.Parameters['Animation Rate']);
Yanfly.Param.FlashTarget = String(Yanfly.Parameters['Flash Target']);
Yanfly.Param.ReposBattlers = String(Yanfly.Parameters['Reposition Battlers']);
Yanfly.Param.EnemyMaxHp = Number(Yanfly.Parameters['Enemy MaxHP']);
Yanfly.Param.EnemyMaxMp = Number(Yanfly.Parameters['Enemy MaxMP']);
Yanfly.Param.EnemyParam = Number(Yanfly.Parameters['Enemy Parameter']);
Yanfly.Param.ActorMaxHp = Number(Yanfly.Parameters['Actor MaxHP']);
Yanfly.Param.ActorMaxMp = Number(Yanfly.Parameters['Actor MaxMP']);
Yanfly.Param.ActorParam = Number(Yanfly.Parameters['Actor Parameter']);
Yanfly.Param.MaxGold = String(Yanfly.Parameters['Gold Max']);
Yanfly.Param.ChineseFont = String(Yanfly.Parameters['Chinese Font']);
Yanfly.Param.KoreanFont = String(Yanfly.Parameters['Korean Font']);
Yanfly.Param.DefaultFont = String(Yanfly.Parameters['Default Font']);
Yanfly.Param.FontSize = Number(Yanfly.Parameters['Font Size']);
Yanfly.Param.TextAlign = String(Yanfly.Parameters['Text Align']);
Yanfly.Param.LineHeight = Number(Yanfly.Parameters['Line Height']);
Yanfly.Param.GaugeOutline = String(Yanfly.Parameters['Gauge Outline']);
Yanfly.Param.GaugeHeight = Number(Yanfly.Parameters['Gauge Height']);
Yanfly.Param.WindowPadding = Number(Yanfly.Parameters['Window Padding']);
Yanfly.Param.TextPadding = Number(Yanfly.Parameters['Text Padding']);
Yanfly.Param.WindowOpacity = Number(Yanfly.Parameters['Window Opacity']);
Yanfly.Param.MenuTpGauge = String(Yanfly.Parameters['Menu TP Bar']);
Yanfly.Param.ColorNormal = Number(Yanfly.Parameters['Color: Normal']);
Yanfly.Param.ColorSystem = Number(Yanfly.Parameters['Color: System']);
Yanfly.Param.ColorCrisis = Number(Yanfly.Parameters['Color: Crisis']);
Yanfly.Param.ColorDeath = Number(Yanfly.Parameters['Color: Death']);
Yanfly.Param.ColorGaugeBack = Number(Yanfly.Parameters['Color: Gauge Back']);
Yanfly.Param.ColorHpGauge1 = Number(Yanfly.Parameters['Color: HP Gauge 1']);
Yanfly.Param.ColorHpGauge2 = Number(Yanfly.Parameters['Color: HP Gauge 2']);
Yanfly.Param.ColorMpGauge1 = Number(Yanfly.Parameters['Color: MP Gauge 1']);
Yanfly.Param.ColorMpGauge2 = Number(Yanfly.Parameters['Color: MP Gauge 2']);
Yanfly.Param.ColorMpCost = Number(Yanfly.Parameters['Color: MP Cost']);
Yanfly.Param.ColorPowerUp = Number(Yanfly.Parameters['Color: Power Up']);
Yanfly.Param.ColorPowerDown = Number(Yanfly.Parameters['Color: Power Down']);
Yanfly.Param.ColorTpGauge1 = Number(Yanfly.Parameters['Color: TP Gauge 1']);
Yanfly.Param.ColorTpGauge2 = Number(Yanfly.Parameters['Color: TP Gauge 2']);
Yanfly.Param.ColorTpCost = Number(Yanfly.Parameters['Color: TP Cost Color']);
Yanfly.Param.GoldFontSize = String(Yanfly.Parameters['Gold Font Size']);
Yanfly.Icon.Gold = Number(Yanfly.Parameters['Gold Icon']);
Yanfly.Param.GoldOverlap = String(Yanfly.Parameters['Gold Overlap']);
Yanfly.Param.ItemQuantitySize = Number(Yanfly.Parameters['Quantity Text Size']);

//=============================================================================
// Bitmap
//=============================================================================

Yanfly.Core.Bitmap_initialize = Bitmap.prototype.initialize;
Bitmap.prototype.initialize = function(width, height) {
	Yanfly.Core.Bitmap_initialize.call(this, width, height);
	this.fontFace = Yanfly.Param.DefaultFont;
};

//=============================================================================
// Sprite
//=============================================================================

Yanfly.Core.Sprite_updateTransform = Sprite.prototype.updateTransform;
Sprite.prototype.updateTransform = function() {
  Yanfly.Core.Sprite_updateTransform.call(this);
  this.worldTransform.tx = Math.floor(this.worldTransform.tx);
  this.worldTransform.ty = Math.floor(this.worldTransform.ty);
};

//=============================================================================
// ScreenSprite
//=============================================================================

Yanfly.Core.ScreenSprite_initialize = ScreenSprite.prototype.initialize;
ScreenSprite.prototype.initialize = function() {
    Yanfly.Core.ScreenSprite_initialize.call(this);
    this.scale.x = Graphics.width * 2;
    this.scale.y = Graphics.height * 2;
    this.anchor.x = 0.5;
    this.anchor.y = 0.5;
    this.x = Graphics.boxWidth / 2;
    this.x = Graphics.boxHeight / 2;
};

//=============================================================================
// DataManager
//=============================================================================

Yanfly.Core.DataManager_isDatabaseLoaded = DataManager.isDatabaseLoaded;
DataManager.isDatabaseLoaded = function() {
    if (!Yanfly.Core.DataManager_isDatabaseLoaded.call(this)) return false;
		this.processCORENotetags1($dataItems);
		this.processCORENotetags1($dataWeapons);
		this.processCORENotetags1($dataArmors);
		this.processCORENotetags2($dataEnemies);
		this.processCORENotetags3($dataActors);
		this.processCORENotetags4($dataClasses);
		return true;
};

DataManager.processCORENotetags1 = function(group) {
	for (var n = 1; n < group.length; n++) {
		var obj = group[n];
		var notedata = obj.note.split(/[\r\n]+/);

		obj.maxItem = Yanfly.Param.MaxItem;

		for (var i = 0; i < notedata.length; i++) {
			var line = notedata[i];
			if (line.match(/<(?:PRICE):[ ](\d+)>/i)) {
        obj.price = parseInt(RegExp.$1);
			} else if (line.match(/<(?:MAX ITEM):[ ](\d+)>/i)) {
        obj.maxItem = Math.max(1, parseInt(RegExp.$1));
			} else if (line.match(/<(.*):[ ]([\+\-]\d+)>/i)) {
        var stat = String(RegExp.$1).toUpperCase();
				var value = parseInt(RegExp.$2);
				switch (stat) {
					case 'HP':
		      case 'MAXHP':
		      case 'MAX HP':
						obj.params[0] = value;
						break;
					case 'MP':
		      case 'MAXMP':
		      case 'MAX MP':
		      case 'SP':
		      case 'MAXSP':
		      case 'MAX SP':
						obj.params[1] = value;
						break;
					case 'ATK':
		      case 'STR':
						obj.params[2] = value;
						break;
					case 'DEF':
						obj.params[3] = value;
						break;
					case 'MAT':
		      case 'INT' || 'SPI':
						obj.params[4] = value;
						break;
					case 'MDF':
		      case 'RES':
						obj.params[5] = value;
						break;
					case 'AGI':
		      case 'SPD':
						obj.params[6] = value;
						break;
					case 'LUK':
						obj.params[7] = value;
						break;
					case 'EXP':
		      case 'XP':
						obj.exp = value;
						break;
				}
			}
		}
	}
};

DataManager.processCORENotetags2 = function(group) {
	for (var n = 1; n < group.length; n++) {
		var obj = group[n];
		var notedata = obj.note.split(/[\r\n]+/);

		for (var i = 0; i < notedata.length; i++) {
			var line = notedata[i];
			if (line.match(/<(?:GOLD):[ ](\d+)>/i)) {
        obj.gold = parseInt(RegExp.$1);
			} else if (line.match(/<(.*):[ ](\d+)>/i)) {
        var stat = String(RegExp.$1).toUpperCase();
				var value = parseInt(RegExp.$2);
				switch (stat) {
					case 'HP':
		      case 'MAXHP':
		      case 'MAX HP':
						obj.params[0] = value;
						break;
					case 'MP':
		      case 'MAXMP':
		      case 'MAX MP':
		      case 'SP':
		      case 'MAXSP':
		      case 'MAX SP':
						obj.params[1] = value;
						break;
					case 'ATK':
		      case 'STR':
						obj.params[2] = value;
						break;
					case 'DEF':
						obj.params[3] = value;
						break;
					case 'MAT':
		      case 'INT':
		      case 'SPI':
						obj.params[4] = value;
						break;
					case 'MDF':
		      case 'RES':
						obj.params[5] = value;
						break;
					case 'AGI':
		      case 'SPD':
						obj.params[6] = value;
						break;
					case 'LUK':
						obj.params[7] = value;
						break;
				}
			}
		}
	}
};

DataManager.processCORENotetags3 = function(group) {
	for (var n = 1; n < group.length; n++) {
		var obj = group[n];
		var notedata = obj.note.split(/[\r\n]+/);

		obj.maxLevel = Yanfly.Param.MaxLevel;

		for (var i = 0; i < notedata.length; i++) {
			var line = notedata[i];
			if (line.match(/<(?:MAX LEVEL):[ ](\d+)>/i)) {
        obj.maxLevel = parseInt(RegExp.$1);
				if (obj.maxLevel < 1) obj.maxLevel = 1;
			} else if (line.match(/<(?:INITIAL LEVEL):[ ](\d+)>/i)) {
				obj.initialLevel = parseInt(RegExp.$1);
				if (obj.initialLevel < 1) obj.initialLevel = 1;
			}
		}
	}
};

DataManager.processCORENotetags4 = function(group) {
	for (var n = 1; n < group.length; n++) {
		var obj = group[n];
		var notedata = obj.note.split(/[\r\n]+/);

		obj.learnings.forEach(function(learning) {
			if (learning.note.match(/<(?:LEARN LEVEL):[ ](\d+)>/i)) {
				learning.level = parseInt(RegExp.$1);
				if (learning.level < 1) obj.maxLevel = 1;
			}
		}, this);
	}
};

//=============================================================================
// Scene_Manager
//=============================================================================


		if (Number(Yanfly.Parameters['iPhone4S'] == 1)){var widthx = 960;var heightx = 640;}
		else if (Number(Yanfly.Parameters['iPhone5-5C-5S'] == 1)){var widthx = 1136;var heightx = 640;}
		else if (Number(Yanfly.Parameters['iPhone6-6S'] == 1)){var widthx = 1334;var heightx = 750;}
		else if (Number(Yanfly.Parameters['iPhone6-6S-Plus'] == 1)){var widthx = 2208;var heightx = 1242;}
		else if (Number(Yanfly.Parameters['iPad1-2'] == 1)){var widthx = 1024;var heightx = 768;}
		else if (Number(Yanfly.Parameters['iPadMini'] == 1)){var widthx = 1024;var heightx = 768;}
		else if (Number(Yanfly.Parameters['iPadPro'] == 1)){var widthx = 2732;var heightx = 2048;}
		else if (Number(Yanfly.Parameters['iPad3-4-Air-Air2-Mini3'] == 1)){var widthx = 2048;var heightx = 1536;}
		else if (Number(Yanfly.Parameters['MacBookPro2012'] == 1)){var widthx = 1280;var heightx = 800;}
		else if (Number(Yanfly.Parameters['WiiUGamePad'] == 1)){var widthx = 800;var heightx = 480;}
		else if (Number(Yanfly.Parameters['Facebook'] == 1)){var widthx = 760;var heightx = 720;}
		else if (Number(Yanfly.Parameters['NokiaC7'] == 1)){var widthx = 640;var heightx = 360;}
		else if (Number(Yanfly.Parameters['BlackberryPassport'] == 1)){var widthx = 1440;var heightx = 1440;}
		else if (Number(Yanfly.Parameters['KindleFireHDX7'] == 1)){var widthx = 1920;var heightx = 1200;}
		else if (Number(Yanfly.Parameters['KindleFireHDX89'] == 1)){var widthx = 2560;var heightx = 1600;}
		else if (Number(Yanfly.Parameters['FireHD6'] == 1)){var widthx = 1280;var heightx = 800;}
		else if (Number(Yanfly.Parameters['FireHD7'] == 1)){var widthx = 1280;var heightx = 800;}
		else if (Number(Yanfly.Parameters['Fire2015'] == 1)){var widthx = 1024;var heightx = 600;}
		else if (Number(Yanfly.Parameters['FireHD8'] == 1)){var widthx = 1280;var heightx = 800;}
		else if (Number(Yanfly.Parameters['FireHD102015'] == 1)){var widthx = 1280;var heightx = 800;}
		else if (Number(Yanfly.Parameters['SurfacePro3'] == 1)){var widthx = 2160;var heightx = 1440;}
		else if (Number(Yanfly.Parameters['SurfaceRT'] == 1)){var widthx = 1366;var heightx = 768;}
		else if (Number(Yanfly.Parameters['SurfacePro'] == 1)){var widthx = 1920;var heightx = 1080;}
		else if (Number(Yanfly.Parameters['NookTablet'] == 1)){var widthx = 1024;var heightx = 600;}
		else if (Number(Yanfly.Parameters['NookHD'] == 1)){var widthx = 1440;var heightx = 900;}
		else if (Number(Yanfly.Parameters['NookHDplus'] == 1)){var widthx = 1920;var heightx = 1280;}
		else if (Number(Yanfly.Parameters['Arc7'] == 1)){var widthx = 1024;var heightx = 600;}
		else if (Number(Yanfly.Parameters['Arc7HD'] == 1)){var widthx = 1920;var heightx = 1200;}
		else if (Number(Yanfly.Parameters['Venue7'] == 1)){var widthx = 1280;var heightx = 800;}
		else if (Number(Yanfly.Parameters['Venue8'] == 1)){var widthx = 1280;var heightx = 800;}
		else if (Number(Yanfly.Parameters['Latitude10'] == 1)){var widthx = 1366;var heightx = 768;}
		else if (Number(Yanfly.Parameters['Venue11Pro'] == 1)){var widthx = 1920;var heightx = 1080;}
		else if (Number(Yanfly.Parameters['Venue11Pro7139'] == 1)){var widthx = 1920;var heightx = 1080;}
		else if (Number(Yanfly.Parameters['GalaxyTab3Lite7'] == 1)){var widthx = 1024;var heightx = 600;}
		else if (Number(Yanfly.Parameters['GalaxyTab47'] == 1)){var widthx = 1280;var heightx = 800;}
		else if (Number(Yanfly.Parameters['GalaxyTab38'] == 1)){var widthx = 1280;var heightx = 800;}
		else if (Number(Yanfly.Parameters['GalaxyTab4Nook7'] == 1)){var widthx = 1280;var heightx = 800;}
		else if (Number(Yanfly.Parameters['GalaxyTab48'] == 1)){var widthx = 1280;var heightx = 800;}
		else if (Number(Yanfly.Parameters['GalaxyTabPro84'] == 1)){var widthx = 2560;var heightx = 1600;}
		else if (Number(Yanfly.Parameters['GalaxyTab2/3101'] == 1)){var widthx = 1280;var heightx = 800;}
		else if (Number(Yanfly.Parameters['GalaxyTab4101'] == 1)){var widthx = 1280;var heightx = 800;}
		else if (Number(Yanfly.Parameters['GalaxyTab4Nook101'] == 1)){var widthx = 1280;var heightx = 800;}
		else if (Number(Yanfly.Parameters['GalaxyTabS105'] == 1)){var widthx = 2560;var heightx = 1600;}
		else if (Number(Yanfly.Parameters['GalaxyNote1012014'] == 1)){var widthx = 2560;var heightx = 1600;}
		else if (Number(Yanfly.Parameters['GalaxyNotePro122'] == 1)){var widthx = 2560;var heightx = 1600;}
		else if (Number(Yanfly.Parameters['Nexus72012'] == 1)){var widthx = 1280;var heightx = 800;}
		else if (Number(Yanfly.Parameters['Nexus72013'] == 1)){var widthx = 1920;var heightx = 1200;}
		else if (Number(Yanfly.Parameters['Nexus9'] == 1)){var widthx = 2048;var heightx = 1536;}
		else if (Number(Yanfly.Parameters['Nexus102012'] == 1)){var widthx = 2560;var heightx = 1600;}
		else if (Number(Yanfly.Parameters['80Titanium'] == 1)){var widthx = 1024;var heightx = 768;}
		else if (Number(Yanfly.Parameters['97Titanium'] == 1)){var widthx = 2048;var heightx = 1536;}
		else if (Number(Yanfly.Parameters['VivoTabNote8'] == 1)){var widthx = 1280;var heightx = 800;}
		else if (Number(Yanfly.Parameters['TransformerBookT100TA'] == 1)){var widthx = 1366;var heightx = 768;}
		else if (Number(Yanfly.Parameters['AspireSwitch10'] == 1)){var widthx = 1366;var heightx = 768;}
		else if (Number(Yanfly.Parameters['TransformerPadInfinity'] == 1)){var widthx = 1920;var heightx = 1200;}
		else if (Number(Yanfly.Parameters['TransformerPadTF701T'] == 1)){var widthx = 2560;var heightx = 1600;}
		else if (Number(Yanfly.Parameters['Yoga8'] == 1)){var widthx = 1280;var heightx = 800;}
		else if (Number(Yanfly.Parameters['Miix28'] == 1)){var widthx = 1280;var heightx = 800;}
		else if (Number(Yanfly.Parameters['Yoga10'] == 1)){var widthx = 1280;var heightx = 800;}
		else if (Number(Yanfly.Parameters['YogaTablet2'] == 1)){var widthx = 1920;var heightx = 1080;}
		else if (Number(Yanfly.Parameters['Yoga3Pro'] == 1)){var widthx = 3200;var heightx = 1800;}
		else if (Number(Yanfly.Parameters['SatelliteRadiusP55W85224'] == 1)){var widthx = 1920;var heightx = 1080;}
		else if (Number(Yanfly.Parameters['Slate8Pro'] == 1)){var widthx = 1600;var heightx = 1200;}
		else if (Number(Yanfly.Parameters['ElitePad'] == 1)){var widthx = 1280;var heightx = 800;}
		else if (Number(Yanfly.Parameters['XperiaZ'] == 1)){var widthx = 1920;var heightx = 1200;}
		else if (Number(Yanfly.Parameters['XperiaZ3TabletCompact'] == 1)){var widthx = 1920;var heightx = 1200;}
		else if (Number(Yanfly.Parameters['Shield'] == 1)){var widthx = 1920;var heightx = 1080;}
		else if (Number(Yanfly.Parameters['GPad83'] == 1)){var widthx = 1920;var heightx = 1200;}
		else if (Number(Yanfly.Parameters['NabiBigTabHD24'] == 1)){var widthx = 1920;var heightx = 1080;}
		
		var zoommultiplier = Number(Yanfly.Parameters['Custom Zoom Multiplier']);
		
		if (Number(Yanfly.Parameters['Force Retina ON'] == 0))
		{
			var widthxok = widthx * zoommultiplier;
			var heightxok = heightx * zoommultiplier;
		}
		
		else if (Number(Yanfly.Parameters['Force Retina ON'] == 1))
		{
			var widthxok = widthx*2*zoommultiplier;
			var heightxok  = heightx*2*zoommultiplier;	
		}


	
	SceneManager._screenWidth  = widthxok;
	SceneManager._screenHeight = heightxok;
	SceneManager._boxWidth     = widthxok;
	SceneManager._boxHeight    = heightxok;



Yanfly.Core.SceneManager_run = SceneManager.run;
SceneManager.run = function(sceneClass) {
    Yanfly.Core.SceneManager_run.call(this, sceneClass);
		if (Utils.isMobileDevice()) return;
		if (Utils.isMobileSafari()) return;
		if (Utils.isAndroidChrome()) return;
		var resizeWidth = Graphics.boxWidth - window.innerWidth;
		var resizeHeight = Graphics.boxHeight - window.innerHeight;
    if (eval(Yanfly.Param.OpenConsole)) this.openConsole();
    if (!Imported.ScreenResolution) {
  		window.moveBy(-1 * resizeWidth / 2, -1 * resizeHeight / 2);
      window.resizeBy(resizeWidth, resizeHeight);
    }
};

SceneManager.openConsole = function() {
    if (Utils.isNwjs() && Utils.isOptionValid('test')) {
      var _debugWindow = require('nw.gui').Window.get().showDevTools();
      _debugWindow.moveTo(0, 0);
      window.focus();
    }
};

//=============================================================================
// BattleManager
//=============================================================================

Yanfly.Core.BattleManager_displayStartMessages =
    BattleManager.displayStartMessages;
BattleManager.displayStartMessages = function() {
  Yanfly.Core.BattleManager_displayStartMessages.call(this);
	$gameTroop.members().forEach(function(enemy) {
			enemy.recoverAll();
	});
};

//=============================================================================
// Sprite_Animation
//=============================================================================

Sprite_Animation.prototype.setupRate = function() {
	this._rate = Yanfly.Param.AnimationRate;
};

//=============================================================================
// Sprite_Battler
//=============================================================================

if (!eval(Yanfly.Param.FlashTarget)) {

Yanfly.Core.Sprite_Battler_updateSelectionEffect =
		Sprite_Battler.prototype.updateSelectionEffect;
Sprite_Battler.prototype.updateSelectionEffect = function() {
		if (this._battler.isActor()) {
			Yanfly.Core.Sprite_Battler_updateSelectionEffect.call(this);
		} else {
			if (this._battler.isSelected()) this.startEffect('whiten');
		}
};

};

//=============================================================================
// Sprite_Actor
//=============================================================================

if (eval(Yanfly.Param.ReposBattlers)) {
	Yanfly.Core.Sprite_Actor_setActorHome = Sprite_Actor.prototype.setActorHome;
	Sprite_Actor.prototype.setActorHome = function(index) {
			Yanfly.Core.Sprite_Actor_setActorHome.call(this, index);
			
			
					if (Number(Yanfly.Parameters['iPhone4S'] == 1)){var widthx = 960;var heightx = 640;}
					else if (Number(Yanfly.Parameters['iPhone5-5C-5S'] == 1)){var widthx = 1136;var heightx = 640;}
					else if (Number(Yanfly.Parameters['iPhone6-6S'] == 1)){var widthx = 1334;var heightx = 750;}
					else if (Number(Yanfly.Parameters['iPhone6-6S-Plus'] == 1)){var widthx = 2208;var heightx = 1242;}
					else if (Number(Yanfly.Parameters['iPad1-2'] == 1)){var widthx = 1024;var heightx = 768;}
					else if (Number(Yanfly.Parameters['iPadMini'] == 1)){var widthx = 1024;var heightx = 768;}
					else if (Number(Yanfly.Parameters['iPadPro'] == 1)){var widthx = 2732;var heightx = 2048;}
					else if (Number(Yanfly.Parameters['iPad3-4-Air-Air2-Mini3'] == 1)){var widthx = 2048;var heightx = 1536;}
					else if (Number(Yanfly.Parameters['MacBookPro2012'] == 1)){var widthx = 1280;var heightx = 800;}
					else if (Number(Yanfly.Parameters['WiiUGamePad'] == 1)){var widthx = 800;var heightx = 480;}
					else if (Number(Yanfly.Parameters['Facebook'] == 1)){var widthx = 760;var heightx = 720;}
					else if (Number(Yanfly.Parameters['NokiaC7'] == 1)){var widthx = 640;var heightx = 360;}
					else if (Number(Yanfly.Parameters['BlackberryPassport'] == 1)){var widthx = 1440;var heightx = 1440;}
					else if (Number(Yanfly.Parameters['KindleFireHDX7'] == 1)){var widthx = 1920;var heightx = 1200;}
					else if (Number(Yanfly.Parameters['KindleFireHDX89'] == 1)){var widthx = 2560;var heightx = 1600;}
					else if (Number(Yanfly.Parameters['FireHD6'] == 1)){var widthx = 1280;var heightx = 800;}
					else if (Number(Yanfly.Parameters['FireHD7'] == 1)){var widthx = 1280;var heightx = 800;}
					else if (Number(Yanfly.Parameters['Fire2015'] == 1)){var widthx = 1024;var heightx = 600;}
					else if (Number(Yanfly.Parameters['FireHD8'] == 1)){var widthx = 1280;var heightx = 800;}
					else if (Number(Yanfly.Parameters['FireHD102015'] == 1)){var widthx = 1280;var heightx = 800;}
					else if (Number(Yanfly.Parameters['SurfacePro3'] == 1)){var widthx = 2160;var heightx = 1440;}
					else if (Number(Yanfly.Parameters['SurfaceRT'] == 1)){var widthx = 1366;var heightx = 768;}
					else if (Number(Yanfly.Parameters['SurfacePro'] == 1)){var widthx = 1920;var heightx = 1080;}
					else if (Number(Yanfly.Parameters['NookTablet'] == 1)){var widthx = 1024;var heightx = 600;}
					else if (Number(Yanfly.Parameters['NookHD'] == 1)){var widthx = 1440;var heightx = 900;}
					else if (Number(Yanfly.Parameters['NookHDplus'] == 1)){var widthx = 1920;var heightx = 1280;}
					else if (Number(Yanfly.Parameters['Arc7'] == 1)){var widthx = 1024;var heightx = 600;}
					else if (Number(Yanfly.Parameters['Arc7HD'] == 1)){var widthx = 1920;var heightx = 1200;}
					else if (Number(Yanfly.Parameters['Venue7'] == 1)){var widthx = 1280;var heightx = 800;}
					else if (Number(Yanfly.Parameters['Venue8'] == 1)){var widthx = 1280;var heightx = 800;}
					else if (Number(Yanfly.Parameters['Latitude10'] == 1)){var widthx = 1366;var heightx = 768;}
					else if (Number(Yanfly.Parameters['Venue11Pro'] == 1)){var widthx = 1920;var heightx = 1080;}
					else if (Number(Yanfly.Parameters['Venue11Pro7139'] == 1)){var widthx = 1920;var heightx = 1080;}
					else if (Number(Yanfly.Parameters['GalaxyTab3Lite7'] == 1)){var widthx = 1024;var heightx = 600;}
					else if (Number(Yanfly.Parameters['GalaxyTab47'] == 1)){var widthx = 1280;var heightx = 800;}
					else if (Number(Yanfly.Parameters['GalaxyTab38'] == 1)){var widthx = 1280;var heightx = 800;}
					else if (Number(Yanfly.Parameters['GalaxyTab4Nook7'] == 1)){var widthx = 1280;var heightx = 800;}
					else if (Number(Yanfly.Parameters['GalaxyTab48'] == 1)){var widthx = 1280;var heightx = 800;}
					else if (Number(Yanfly.Parameters['GalaxyTabPro84'] == 1)){var widthx = 2560;var heightx = 1600;}
					else if (Number(Yanfly.Parameters['GalaxyTab2/3101'] == 1)){var widthx = 1280;var heightx = 800;}
					else if (Number(Yanfly.Parameters['GalaxyTab4101'] == 1)){var widthx = 1280;var heightx = 800;}
					else if (Number(Yanfly.Parameters['GalaxyTab4Nook101'] == 1)){var widthx = 1280;var heightx = 800;}
					else if (Number(Yanfly.Parameters['GalaxyTabS105'] == 1)){var widthx = 2560;var heightx = 1600;}
					else if (Number(Yanfly.Parameters['GalaxyNote1012014'] == 1)){var widthx = 2560;var heightx = 1600;}
					else if (Number(Yanfly.Parameters['GalaxyNotePro122'] == 1)){var widthx = 2560;var heightx = 1600;}
					else if (Number(Yanfly.Parameters['Nexus72012'] == 1)){var widthx = 1280;var heightx = 800;}
					else if (Number(Yanfly.Parameters['Nexus72013'] == 1)){var widthx = 1920;var heightx = 1200;}
					else if (Number(Yanfly.Parameters['Nexus9'] == 1)){var widthx = 2048;var heightx = 1536;}
					else if (Number(Yanfly.Parameters['Nexus102012'] == 1)){var widthx = 2560;var heightx = 1600;}
					else if (Number(Yanfly.Parameters['80Titanium'] == 1)){var widthx = 1024;var heightx = 768;}
					else if (Number(Yanfly.Parameters['97Titanium'] == 1)){var widthx = 2048;var heightx = 1536;}
					else if (Number(Yanfly.Parameters['VivoTabNote8'] == 1)){var widthx = 1280;var heightx = 800;}
					else if (Number(Yanfly.Parameters['TransformerBookT100TA'] == 1)){var widthx = 1366;var heightx = 768;}
					else if (Number(Yanfly.Parameters['AspireSwitch10'] == 1)){var widthx = 1366;var heightx = 768;}
					else if (Number(Yanfly.Parameters['TransformerPadInfinity'] == 1)){var widthx = 1920;var heightx = 1200;}
					else if (Number(Yanfly.Parameters['TransformerPadTF701T'] == 1)){var widthx = 2560;var heightx = 1600;}
					else if (Number(Yanfly.Parameters['Yoga8'] == 1)){var widthx = 1280;var heightx = 800;}
					else if (Number(Yanfly.Parameters['Miix28'] == 1)){var widthx = 1280;var heightx = 800;}
					else if (Number(Yanfly.Parameters['Yoga10'] == 1)){var widthx = 1280;var heightx = 800;}
					else if (Number(Yanfly.Parameters['YogaTablet2'] == 1)){var widthx = 1920;var heightx = 1080;}
					else if (Number(Yanfly.Parameters['Yoga3Pro'] == 1)){var widthx = 3200;var heightx = 1800;}
					else if (Number(Yanfly.Parameters['SatelliteRadiusP55W85224'] == 1)){var widthx = 1920;var heightx = 1080;}
					else if (Number(Yanfly.Parameters['Slate8Pro'] == 1)){var widthx = 1600;var heightx = 1200;}
					else if (Number(Yanfly.Parameters['ElitePad'] == 1)){var widthx = 1280;var heightx = 800;}
					else if (Number(Yanfly.Parameters['XperiaZ'] == 1)){var widthx = 1920;var heightx = 1200;}
					else if (Number(Yanfly.Parameters['XperiaZ3TabletCompact'] == 1)){var widthx = 1920;var heightx = 1200;}
					else if (Number(Yanfly.Parameters['Shield'] == 1)){var widthx = 1920;var heightx = 1080;}
					else if (Number(Yanfly.Parameters['GPad83'] == 1)){var widthx = 1920;var heightx = 1200;}
					else if (Number(Yanfly.Parameters['NabiBigTabHD24'] == 1)){var widthx = 1920;var heightx = 1080;}
					
					var zoommultiplier = Number(Yanfly.Parameters['Custom Zoom Multiplier']);
					
					if (Number(Yanfly.Parameters['Force Retina ON'] == 0))
					{
						var widthxok = widthx * zoommultiplier;
						var heightxok = heightx * zoommultiplier;
					}
					
					else if (Number(Yanfly.Parameters['Force Retina ON'] == 1))
					{
						var widthxok = widthx*2*zoommultiplier;
						var heightxok  = heightx*2*zoommultiplier;	
					}
					
			//Works in side-view. Need to better test in front view mode.
			//Positionning is rather controlled by another YEP_CoreEngine parameter that deals with Actors positionning.
			this._homeX += Graphics.boxWidth - widthxok;
			this._homeY += Graphics.boxHeight - heightxok;
			
	};
};

//=============================================================================
// Sprite_Enemy
//=============================================================================

if (eval(Yanfly.Param.ReposBattlers)) {
	Yanfly.Core.Sprite_Enemy_setBattler = Sprite_Enemy.prototype.setBattler;
	Sprite_Enemy.prototype.setBattler = function(battler) {
			Yanfly.Core.Sprite_Enemy_setBattler.call(this, battler);
			
			
					if (Number(Yanfly.Parameters['iPhone4S'] == 1)){var widthx = 960;var heightx = 640;}
					else if (Number(Yanfly.Parameters['iPhone5-5C-5S'] == 1)){var widthx = 1136;var heightx = 640;}
					else if (Number(Yanfly.Parameters['iPhone6-6S'] == 1)){var widthx = 1334;var heightx = 750;}
					else if (Number(Yanfly.Parameters['iPhone6-6S-Plus'] == 1)){var widthx = 2208;var heightx = 1242;}
					else if (Number(Yanfly.Parameters['iPad1-2'] == 1)){var widthx = 1024;var heightx = 768;}
					else if (Number(Yanfly.Parameters['iPadMini'] == 1)){var widthx = 1024;var heightx = 768;}
					else if (Number(Yanfly.Parameters['iPadPro'] == 1)){var widthx = 2732;var heightx = 2048;}
					else if (Number(Yanfly.Parameters['iPad3-4-Air-Air2-Mini3'] == 1)){var widthx = 2048;var heightx = 1536;}
					else if (Number(Yanfly.Parameters['MacBookPro2012'] == 1)){var widthx = 1280;var heightx = 800;}
					else if (Number(Yanfly.Parameters['WiiUGamePad'] == 1)){var widthx = 800;var heightx = 480;}
					else if (Number(Yanfly.Parameters['Facebook'] == 1)){var widthx = 760;var heightx = 720;}
					else if (Number(Yanfly.Parameters['NokiaC7'] == 1)){var widthx = 640;var heightx = 360;}
					else if (Number(Yanfly.Parameters['BlackberryPassport'] == 1)){var widthx = 1440;var heightx = 1440;}
					else if (Number(Yanfly.Parameters['KindleFireHDX7'] == 1)){var widthx = 1920;var heightx = 1200;}
					else if (Number(Yanfly.Parameters['KindleFireHDX89'] == 1)){var widthx = 2560;var heightx = 1600;}
					else if (Number(Yanfly.Parameters['FireHD6'] == 1)){var widthx = 1280;var heightx = 800;}
					else if (Number(Yanfly.Parameters['FireHD7'] == 1)){var widthx = 1280;var heightx = 800;}
					else if (Number(Yanfly.Parameters['Fire2015'] == 1)){var widthx = 1024;var heightx = 600;}
					else if (Number(Yanfly.Parameters['FireHD8'] == 1)){var widthx = 1280;var heightx = 800;}
					else if (Number(Yanfly.Parameters['FireHD102015'] == 1)){var widthx = 1280;var heightx = 800;}
					else if (Number(Yanfly.Parameters['SurfacePro3'] == 1)){var widthx = 2160;var heightx = 1440;}
					else if (Number(Yanfly.Parameters['SurfaceRT'] == 1)){var widthx = 1366;var heightx = 768;}
					else if (Number(Yanfly.Parameters['SurfacePro'] == 1)){var widthx = 1920;var heightx = 1080;}
					else if (Number(Yanfly.Parameters['NookTablet'] == 1)){var widthx = 1024;var heightx = 600;}
					else if (Number(Yanfly.Parameters['NookHD'] == 1)){var widthx = 1440;var heightx = 900;}
					else if (Number(Yanfly.Parameters['NookHDplus'] == 1)){var widthx = 1920;var heightx = 1280;}
					else if (Number(Yanfly.Parameters['Arc7'] == 1)){var widthx = 1024;var heightx = 600;}
					else if (Number(Yanfly.Parameters['Arc7HD'] == 1)){var widthx = 1920;var heightx = 1200;}
					else if (Number(Yanfly.Parameters['Venue7'] == 1)){var widthx = 1280;var heightx = 800;}
					else if (Number(Yanfly.Parameters['Venue8'] == 1)){var widthx = 1280;var heightx = 800;}
					else if (Number(Yanfly.Parameters['Latitude10'] == 1)){var widthx = 1366;var heightx = 768;}
					else if (Number(Yanfly.Parameters['Venue11Pro'] == 1)){var widthx = 1920;var heightx = 1080;}
					else if (Number(Yanfly.Parameters['Venue11Pro7139'] == 1)){var widthx = 1920;var heightx = 1080;}
					else if (Number(Yanfly.Parameters['GalaxyTab3Lite7'] == 1)){var widthx = 1024;var heightx = 600;}
					else if (Number(Yanfly.Parameters['GalaxyTab47'] == 1)){var widthx = 1280;var heightx = 800;}
					else if (Number(Yanfly.Parameters['GalaxyTab38'] == 1)){var widthx = 1280;var heightx = 800;}
					else if (Number(Yanfly.Parameters['GalaxyTab4Nook7'] == 1)){var widthx = 1280;var heightx = 800;}
					else if (Number(Yanfly.Parameters['GalaxyTab48'] == 1)){var widthx = 1280;var heightx = 800;}
					else if (Number(Yanfly.Parameters['GalaxyTabPro84'] == 1)){var widthx = 2560;var heightx = 1600;}
					else if (Number(Yanfly.Parameters['GalaxyTab2/3101'] == 1)){var widthx = 1280;var heightx = 800;}
					else if (Number(Yanfly.Parameters['GalaxyTab4101'] == 1)){var widthx = 1280;var heightx = 800;}
					else if (Number(Yanfly.Parameters['GalaxyTab4Nook101'] == 1)){var widthx = 1280;var heightx = 800;}
					else if (Number(Yanfly.Parameters['GalaxyTabS105'] == 1)){var widthx = 2560;var heightx = 1600;}
					else if (Number(Yanfly.Parameters['GalaxyNote1012014'] == 1)){var widthx = 2560;var heightx = 1600;}
					else if (Number(Yanfly.Parameters['GalaxyNotePro122'] == 1)){var widthx = 2560;var heightx = 1600;}
					else if (Number(Yanfly.Parameters['Nexus72012'] == 1)){var widthx = 1280;var heightx = 800;}
					else if (Number(Yanfly.Parameters['Nexus72013'] == 1)){var widthx = 1920;var heightx = 1200;}
					else if (Number(Yanfly.Parameters['Nexus9'] == 1)){var widthx = 2048;var heightx = 1536;}
					else if (Number(Yanfly.Parameters['Nexus102012'] == 1)){var widthx = 2560;var heightx = 1600;}
					else if (Number(Yanfly.Parameters['80Titanium'] == 1)){var widthx = 1024;var heightx = 768;}
					else if (Number(Yanfly.Parameters['97Titanium'] == 1)){var widthx = 2048;var heightx = 1536;}
					else if (Number(Yanfly.Parameters['VivoTabNote8'] == 1)){var widthx = 1280;var heightx = 800;}
					else if (Number(Yanfly.Parameters['TransformerBookT100TA'] == 1)){var widthx = 1366;var heightx = 768;}
					else if (Number(Yanfly.Parameters['AspireSwitch10'] == 1)){var widthx = 1366;var heightx = 768;}
					else if (Number(Yanfly.Parameters['TransformerPadInfinity'] == 1)){var widthx = 1920;var heightx = 1200;}
					else if (Number(Yanfly.Parameters['TransformerPadTF701T'] == 1)){var widthx = 2560;var heightx = 1600;}
					else if (Number(Yanfly.Parameters['Yoga8'] == 1)){var widthx = 1280;var heightx = 800;}
					else if (Number(Yanfly.Parameters['Miix28'] == 1)){var widthx = 1280;var heightx = 800;}
					else if (Number(Yanfly.Parameters['Yoga10'] == 1)){var widthx = 1280;var heightx = 800;}
					else if (Number(Yanfly.Parameters['YogaTablet2'] == 1)){var widthx = 1920;var heightx = 1080;}
					else if (Number(Yanfly.Parameters['Yoga3Pro'] == 1)){var widthx = 3200;var heightx = 1800;}
					else if (Number(Yanfly.Parameters['SatelliteRadiusP55W85224'] == 1)){var widthx = 1920;var heightx = 1080;}
					else if (Number(Yanfly.Parameters['Slate8Pro'] == 1)){var widthx = 1600;var heightx = 1200;}
					else if (Number(Yanfly.Parameters['ElitePad'] == 1)){var widthx = 1280;var heightx = 800;}
					else if (Number(Yanfly.Parameters['XperiaZ'] == 1)){var widthx = 1920;var heightx = 1200;}
					else if (Number(Yanfly.Parameters['XperiaZ3TabletCompact'] == 1)){var widthx = 1920;var heightx = 1200;}
					else if (Number(Yanfly.Parameters['Shield'] == 1)){var widthx = 1920;var heightx = 1080;}
					else if (Number(Yanfly.Parameters['GPad83'] == 1)){var widthx = 1920;var heightx = 1200;}
					else if (Number(Yanfly.Parameters['NabiBigTabHD24'] == 1)){var widthx = 1920;var heightx = 1080;}
					
					var zoommultiplier = Number(Yanfly.Parameters['Custom Zoom Multiplier']);
					
					if (Number(Yanfly.Parameters['Force Retina ON'] == 0))
					{
						var widthxok = widthx * zoommultiplier;
						var heightxok = heightx * zoommultiplier;
					}
					
					else if (Number(Yanfly.Parameters['Force Retina ON'] == 1))
					{
						var widthxok = widthx*2*zoommultiplier;
						var heightxok  = heightx*2*zoommultiplier;	
					}
			
			//The more this number augments, example: from "- 624" to "- 824", the more enemies are displayed towards top of screen. Def: 624.
			this._homeY += Graphics.boxHeight - 680;
			//The more this number augments, example: from "- 816" to "- 1016", the more the enemies are displayed towards the left screen side. Def: 816.
			this._homeX += (Graphics.boxWidth - 1016) / 2;
			
			if ($gameSystem.isSideView()) return;
			
			this._homeX += (Graphics.boxWidth - 1116) / 2;
			
	};
};

//=============================================================================
// Sprite_StateIcon
//=============================================================================

Sprite_StateIcon._iconWidth  = Number(Yanfly.Parameters['Icon Width'] || 32);;
Sprite_StateIcon._iconHeight = Number(Yanfly.Parameters['Icon Height'] || 32);;

//=============================================================================
// Game_BattlerBase
//=============================================================================

Game_BattlerBase.prototype.paramMax = function(paramId) {
    if (paramId === 0) {
        return Yanfly.Param.EnemyMaxHp;
    } else if (paramId === 1) {
        return Yanfly.Param.EnemyMaxMp;
    } else {
        return Yanfly.Param.EnemyParam;
    }
};

//=============================================================================
// Game_Actor
//=============================================================================

Yanfly.Core.Game_Actor_isMaxLevel = Game_Actor.prototype.isMaxLevel;
Game_Actor.prototype.isMaxLevel = function() {
		if (this.maxLevel() == 0) return false;
    return Yanfly.Core.Game_Actor_isMaxLevel.call(this);
};

Game_Actor.prototype.paramMax = function(paramId) {
	if (paramId === 0) {
			return Yanfly.Param.ActorMaxHp;
	} else if (paramId === 1) {
			return Yanfly.Param.ActorMaxMp;
	} else {
			return Yanfly.Param.ActorParam;
	}
};

Yanfly.Core.Game_Actor_paramBase = Game_Actor.prototype.paramBase;
Game_Actor.prototype.paramBase = function(paramId) {
		if (this.level > 99) {
			var i = this.currentClass().params[paramId][99];
			var j = this.currentClass().params[paramId][98];
			i += (i - j) * (this.level - 99);
			return i;
		}
    return Yanfly.Core.Game_Actor_paramBase.call(this, paramId);
};

//=============================================================================
// Game_Party
//=============================================================================

Game_Party.prototype.maxGold = function() {
    return eval(Yanfly.Param.MaxGold);
};

Game_Party.prototype.maxItems = function(item) {
    if (!item) return 1;
    return item.maxItem;
};

//=============================================================================
// Game_Map
//=============================================================================

Game_Map.prototype.displayX = function() {
    return parseFloat(Math.floor(this._displayX *
			this.tileWidth())) / this.tileWidth();
};

Game_Map.prototype.displayY = function() {
    return parseFloat(Math.floor(this._displayY *
			this.tileHeight())) / this.tileHeight();
};

Game_Map.prototype.adjustX = function(x) {
    if (this.isLoopHorizontal() && x < this.displayX() -
            (this.width() - this.screenTileX()) / 2) {
        return x - this.displayX() + $dataMap.width;
    } else {
        return x - this.displayX();
    }
};

Game_Map.prototype.adjustY = function(y) {
    if (this.isLoopVertical() && y < this.displayY() -
            (this.height() - this.screenTileY()) / 2) {
        return y - this.displayY() + $dataMap.height;
    } else {
        return y - this.displayY();
    }
};

//=============================================================================
// Game_CharacterBase
//=============================================================================

Game_CharacterBase.prototype.update = function() {
    if (this.isJumping()) {
        this.updateJump();
    } else if (this.isMoving()) {
        this.updateMove();
    }
    if (!this.isMoving()) {
        this.updateStop();
    }
    this.updateAnimation();
};

Yanfly.Core.Game_CharacterBase_updateMove =
 		Game_CharacterBase.prototype.updateMove;
Game_CharacterBase.prototype.updateMove = function() {
    Yanfly.Core.Game_CharacterBase_updateMove.call(this);
    if (!this.isMoving()) this.updateStop();
};

//=============================================================================
// Game_Character
//=============================================================================

Game_Character.prototype.queueMoveRoute = function(moveRoute) {
    this._originalMoveRoute = moveRoute;
    this._originalMoveRouteIndex = 0;
};

Yanfly.Core.Game_Event_setMoveRoute =
    Game_Event.prototype.setMoveRoute;
Game_Character.prototype.setMoveRoute = function(moveRoute) {
    if (!this._moveRouteForcing) {
        Yanfly.Core.Game_Event_setMoveRoute.call(this, moveRoute);
    } else {
        this.queueMoveRoute(moveRoute);
    }
};

//=============================================================================
// Game_Event
//=============================================================================

Game_Event.prototype.isCollidedWithEvents = function(x, y) {
  var events = $gameMap.eventsXyNt(x, y).filter(function(ev) {
		return ev.isNormalPriority();
	});
	if (events.length <= 0) return false;
	return this.isNormalPriority();
};

//=============================================================================
// Game_Interpreter
//=============================================================================

Yanfly.Core.Game_Interpreter_pluginCommand =
    Game_Interpreter.prototype.pluginCommand;
Game_Interpreter.prototype.pluginCommand = function(command, args) {
    Yanfly.Core.Game_Interpreter_pluginCommand.call(this, command, args);
    if (command === 'GainGold') {
        $gameParty.gainGold(parseInt(args[0]));
    }
    if (command === 'LoseGold') {
        $gameParty.loseGold(parseInt(args[0]));
    }
};

//=============================================================================
// Window_Base
//=============================================================================

Window_Base._iconWidth   = Number(Yanfly.Parameters['Icon Width'] || 32);
Window_Base._iconHeight  = Number(Yanfly.Parameters['Icon Height'] || 32);
Window_Base._faceWidth   = Number(Yanfly.Parameters['Face Width'] || 144);
Window_Base._faceHeight  = Number(Yanfly.Parameters['Face Height'] || 144);

Window_Base.prototype.lineHeight = function() {
	return Yanfly.Param.LineHeight;
};

Window_Base.prototype.textWidthEx = function(text) {
    return this.drawTextEx(text, 0, this.contents.height);
};

Window_Base.prototype.standardFontFace = function() {
    if ($gameSystem.isChinese()) {
		return Yanfly.Param.ChineseFont;
    } else if ($gameSystem.isKorean()) {
		return Yanfly.Param.KoreanFont;
    } else {
		return Yanfly.Param.DefaultFont;
    }
};

Window_Base.prototype.standardFontSize = function() {
    return Yanfly.Param.FontSize;
};

Window_Base.prototype.standardPadding = function() {
    return Yanfly.Param.WindowPadding;
};

Window_Base.prototype.textPadding = function() {
    return Yanfly.Param.TextPadding;
};

Window_Base.prototype.standardBackOpacity = function() {
    return Yanfly.Param.WindowOpacity;
};

Window_Base.prototype.normalColor = function() {
	return this.textColor(Yanfly.Param.ColorNormal);
};
Window_Base.prototype.systemColor = function() {
    return this.textColor(Yanfly.Param.ColorSystem);
};

Window_Base.prototype.crisisColor = function() {
    return this.textColor(Yanfly.Param.ColorCrisis);
};

Window_Base.prototype.deathColor = function() {
    return this.textColor(Yanfly.Param.ColorDeath);
};

Window_Base.prototype.gaugeBackColor = function() {
    return this.textColor(Yanfly.Param.ColorGaugeBack);
};

Window_Base.prototype.hpGaugeColor1 = function() {
    return this.textColor(Yanfly.Param.ColorHpGauge1);
};

Window_Base.prototype.hpGaugeColor2 = function() {
    return this.textColor(Yanfly.Param.ColorHpGauge2);
};

Window_Base.prototype.mpGaugeColor1 = function() {
    return this.textColor(Yanfly.Param.ColorMpGauge1);
};

Window_Base.prototype.mpGaugeColor2 = function() {
    return this.textColor(Yanfly.Param.ColorMpGauge2);
};

Window_Base.prototype.mpCostColor = function() {
    return this.textColor(Yanfly.Param.ColorMpCost);
};

Window_Base.prototype.powerUpColor = function() {
    return this.textColor(Yanfly.Param.ColorPowerUp);
};

Window_Base.prototype.powerDownColor = function() {
    return this.textColor(Yanfly.Param.ColorPowerDown);
};

Window_Base.prototype.tpGaugeColor1 = function() {
    return this.textColor(Yanfly.Param.ColorTpGauge1);
};

Window_Base.prototype.tpGaugeColor2 = function() {
    return this.textColor(Yanfly.Param.ColorTpGauge2);
};

Window_Base.prototype.tpCostColor = function() {
		return this.textColor(Yanfly.Param.ColorTpCost);
};

Window_Base.prototype.drawGauge = function(dx, dy, dw, rate, color1, color2) {
	var color3 = this.gaugeBackColor();
	var fillW = Math.floor(dw * rate).clamp(0, dw);
	var gaugeH = this.gaugeHeight();
	var gaugeY = dy + this.lineHeight() - gaugeH - 2;
	if (eval(Yanfly.Param.GaugeOutline)) {
		color3.paintOpacity = this.translucentOpacity();
		this.contents.fillRect(dx, gaugeY-1, dw+2, gaugeH+2, color3);
		dx += 1;
	} else {
		var fillW = Math.floor(dw * rate);
		var gaugeY = dy + this.lineHeight() - gaugeH - 2;
		this.contents.fillRect(dx, gaugeY, dw, gaugeH, color3);
	}
    this.contents.gradientFillRect(dx, gaugeY, fillW, gaugeH, color1, color2);
};

Window_Base.prototype.gaugeHeight = function() {
		return Yanfly.Param.GaugeHeight;
};

Window_Base.prototype.drawActorLevel = function(actor, x, y) {
    this.changeTextColor(this.systemColor());
		var dw1 = this.textWidth(TextManager.levelA);
		this.drawText(TextManager.levelA, x, y, dw1);
    this.resetTextColor();
		var level = Yanfly.Util.toGroup(actor.level);
		var dw2 = this.textWidth(Yanfly.Util.toGroup(actor.maxLevel()));
    this.drawText(level, x + dw1, y, dw2, 'right');
};

Window_Base.prototype.drawCurrentAndMax = function(current, max, x, y,
                                                   width, color1, color2) {
		var labelWidth = this.textWidth('HP');
    var valueWidth = this.textWidth(Yanfly.Util.toGroup(max));
    var slashWidth = this.textWidth('/');
    var x1 = x + width - valueWidth;
    var x2 = x1 - slashWidth;
    var x3 = x2 - valueWidth;
    if (x3 >= x + labelWidth) {
        this.changeTextColor(color1);
        this.drawText(Yanfly.Util.toGroup(current), x3, y, valueWidth,
					'right');
        this.changeTextColor(color2);
        this.drawText('/', x2, y, slashWidth, 'right');
        this.drawText(Yanfly.Util.toGroup(max), x1, y, valueWidth, 'right');
    } else {
        this.changeTextColor(color1);
        this.drawText(Yanfly.Util.toGroup(current), x1, y, valueWidth,
					'right');
    }
};

Window_Base.prototype.drawActorTp = function(actor, x, y, width) {
    width = width || 96;
    var color1 = this.tpGaugeColor1();
    var color2 = this.tpGaugeColor2();
    this.drawGauge(x, y, width, actor.tpRate(), color1, color2);
    this.changeTextColor(this.systemColor());
    this.drawText(TextManager.tpA, x, y, 44);
    this.changeTextColor(this.tpColor(actor));
    this.drawText(Yanfly.Util.toGroup(actor.tp), x + width - 64, y, 64,
			'right');
};

Window_Base.prototype.drawActorSimpleStatus = function(actor, x, y, width) {
    var lineHeight = this.lineHeight();
		var xpad = Window_Base._faceWidth + (2 * Yanfly.Param.TextPadding);
    var x2 = x + xpad;
    var width2 = Math.max(200, width - xpad - this.textPadding());
    this.drawActorName(actor, x, y);
    this.drawActorLevel(actor, x, y + lineHeight * 1);
    this.drawActorIcons(actor, x, y + lineHeight * 2);
    this.drawActorClass(actor, x2, y, width2);
    this.drawActorHp(actor, x2, y + lineHeight * 1, width2);
    this.drawActorMp(actor, x2, y + lineHeight * 2, width2);
		if (eval(Yanfly.Param.MenuTpGauge)) {
			this.drawActorTp(actor, x2, y + lineHeight * 3, width2);
		}
};

Window_Base.prototype.drawCurrencyValue = function(value, unit, wx, wy, ww) {
    this.resetTextColor();
    this.contents.fontSize = Yanfly.Param.GoldFontSize;
    if (this.usingGoldIcon(unit)) {
      var cx = Window_Base._iconWidth;
    } else {
      var cx = this.textWidth(unit);
    }
    var text = Yanfly.Util.toGroup(value);
    if (this.textWidth(text) > ww - cx) {
      text = Yanfly.Param.GoldOverlap;
    }
    this.drawText(text, wx, wy, ww - cx - 4, 'right');
    if (this.usingGoldIcon(unit)) {
      this.drawIcon(Yanfly.Icon.Gold, wx + ww - Window_Base._iconWidth, wy + 2);
    } else {
      this.changeTextColor(this.systemColor());
      this.drawText(unit, wx, wy, ww, 'right');
    }
    this.resetFontSettings();
};

Window_Base.prototype.usingGoldIcon = function(unit) {
    if (unit !== TextManager.currencyUnit) return false;
    return Yanfly.Icon.Gold > 0;
};

Window_Base.prototype.drawItemName = function(item, x, y, width) {
    width = width || 312;
    if (item) {
        var iconBoxWidth = this.lineHeight();
				var padding = (iconBoxWidth - Window_Base._iconWidth) / 2;
        this.resetTextColor();
        this.drawIcon(item.iconIndex, x + padding, y + padding);
        this.drawText(item.name, x + iconBoxWidth, y, width - iconBoxWidth);
    }
};

//=============================================================================
// Window_Command
//=============================================================================

Window_Command.prototype.itemTextAlign = function() {
    return Yanfly.Param.TextAlign;
};

//=============================================================================
// Window_MenuStatus
//=============================================================================

Window_MenuStatus.prototype.drawItemStatus = function(index) {
    var actor = $gameParty.members()[index];
    var rect = this.itemRect(index);
		var xpad = Yanfly.Param.WindowPadding + Window_Base._faceWidth;
    var x = rect.x + xpad;
		if (!eval(Yanfly.Param.MenuTpGauge)) {
			var y = rect.y + rect.height / 2 - this.lineHeight() * 1.5;
		} else {
			var y = rect.y;
		}
    var width = rect.width - x - this.textPadding();
    this.drawActorSimpleStatus(actor, x, y, width);
};

//=============================================================================
// Window_ItemList
//=============================================================================

Window_ItemList.prototype.numberWidth = function() {
    return this.textWidth('\u00d70,000');
};

Window_ItemList.prototype.drawItemNumber = function(item, x, y, width) {
    if (!this.needsNumber()) return;
		var numItems = Yanfly.Util.toGroup($gameParty.numItems(item));
    this.contents.fontSize = Yanfly.Param.ItemQuantitySize;
    this.drawText('\u00d7' + numItems, x, y, width, 'right');
    this.resetFontSettings();
};

//=============================================================================
// Window_SkillStatus
//=============================================================================

Window_SkillStatus.prototype.refresh = function() {
    this.contents.clear();
    if (this._actor) {
        var w = this.width - this.padding * 2;
        var h = this.height - this.padding * 2;
				if (!eval(Yanfly.Param.MenuTpGauge)) {
					var y = h / 2 - this.lineHeight() * 1.5;
				} else {
					var y = 0;
				}
				var xpad = Yanfly.Param.WindowPadding + Window_Base._faceWidth;
        var width = w - xpad - this.textPadding();
        this.drawActorFace(this._actor, 0, 0, Window_Base._faceWidth, h);
        this.drawActorSimpleStatus(this._actor, xpad, y, width);
    }
};

Window_SkillList.prototype.drawSkillCost = function(skill, x, y, width) {
    if (this._actor.skillTpCost(skill) > 0) {
        this.changeTextColor(this.tpCostColor());
				var skillcost = Yanfly.Util.toGroup(this._actor.skillTpCost(skill));
        this.drawText(skillcost, x, y, width, 'right');
    } else if (this._actor.skillMpCost(skill) > 0) {
        this.changeTextColor(this.mpCostColor());
				var skillcost = Yanfly.Util.toGroup(this._actor.skillMpCost(skill));
        this.drawText(skillcost, x, y, width, 'right');
    }
};

//=============================================================================
// Window_EquipStatus
//=============================================================================

Window_EquipStatus.prototype.drawCurrentParam = function(x, y, paramId) {
    this.resetTextColor();
		var actorparam = Yanfly.Util.toGroup(this._actor.param(paramId));
    this.drawText(actorparam, x, y, 48, 'right');
};

Window_EquipStatus.prototype.drawNewParam = function(x, y, paramId) {
    var newValue = this._tempActor.param(paramId);
    var diffvalue = newValue - this._actor.param(paramId);
		var actorparam = Yanfly.Util.toGroup(newValue);
    this.changeTextColor(this.paramchangeTextColor(diffvalue));
    this.drawText(actorparam, x, y, 48, 'right');
};

//=============================================================================
// Window_SkillType
//=============================================================================

Window_SkillType.prototype.makeCommandList = function() {
    if (this._actor) {
        var skillTypes = this._actor.addedSkillTypes();
        skillTypes.sort(function(a, b){return a-b});
        skillTypes.forEach(function(stypeId) {
            var name = $dataSystem.skillTypes[stypeId];
            this.addCommand(name, 'skill', true, stypeId);
        }, this);
    }
};

//=============================================================================
// Window_ActorCommand
//=============================================================================

Window_ActorCommand.prototype.addSkillCommands = function() {
    var skillTypes = this._actor.addedSkillTypes();
    skillTypes.sort(function(a, b){return a-b});
    skillTypes.forEach(function(stypeId) {
        var name = $dataSystem.skillTypes[stypeId];
        this.addCommand(name, 'skill', true, stypeId);
    }, this);
};

//=============================================================================
// Window_Status
//=============================================================================

Window_Status.prototype.drawParameters = function(x, y) {
    var lineHeight = this.lineHeight();
    for (var i = 0; i < 6; i++) {
      var paramId = i + 2;
      var y2 = y + lineHeight * i;
      this.changeTextColor(this.systemColor());
      this.drawText(TextManager.param(paramId), x, y2, 160);
      this.resetTextColor();
			var actorParam = Yanfly.Util.toGroup(this._actor.param(paramId));
			var dw = this.textWidth(Yanfly.Util.toGroup(this._actor.paramMax(i + 2)));
      this.drawText(actorParam, x + 160, y2, dw, 'right');
    }
};

Window_Status.prototype.drawExpInfo = function(x, y) {
    var lineHeight = this.lineHeight();
    var expTotal = TextManager.expTotal.format(TextManager.exp);
    var expNext = TextManager.expNext.format(TextManager.level);
    var value1 = this._actor.currentExp();
    var value2 = this._actor.nextRequiredExp();
    if (this._actor.isMaxLevel()) {
        value1 = '-------';
        value2 = '-------';
    } else {
			value1 = Yanfly.Util.toGroup(value1);
			value2 = Yanfly.Util.toGroup(value2);
		}
    this.changeTextColor(this.systemColor());
    this.drawText(expTotal, x, y + lineHeight * 0, 270);
    this.drawText(expNext, x, y + lineHeight * 2, 270);
    this.resetTextColor();
    this.drawText(value1, x, y + lineHeight * 1, 270, 'right');
    this.drawText(value2, x, y + lineHeight * 3, 270, 'right');
};

//=============================================================================
// Window_ShopBuy
//=============================================================================

Window_ShopBuy.prototype.drawItem = function(index) {
    var item = this._data[index];
    var rect = this.itemRect(index);
    rect.width -= this.textPadding();
    this.changePaintOpacity(this.isEnabled(item));
    this.drawItemName(item, rect.x, rect.y, rect.width);
    this.contents.fontSize = Yanfly.Param.GoldFontSize;
		var itemPrice = Yanfly.Util.toGroup(this.price(item));
    this.drawText(itemPrice, rect.x, rect.y, rect.width, 'right');
    this.changePaintOpacity(true);
    this.resetFontSettings();
};

//=============================================================================
// Window_ShopNumber
//=============================================================================

Window_ShopNumber.prototype.drawNumber = function() {
    var x = this.cursorX();
    var y = this.itemY();
    var width = this.cursorWidth() - this.textPadding();
    this.resetTextColor();
		var itemNumber = Yanfly.Util.toGroup(this._number);
    this.drawText(itemNumber, x, y, width, 'right');
};

//=============================================================================
// Window_BattleStatus
//=============================================================================

Window_BattleStatus.prototype.gaugeAreaWidth = function() {
    return this.width / 2 + this.standardPadding();
};

Window_BattleStatus.prototype.drawBasicArea = function(rect, actor) {
    var minIconArea = Window_Base._iconWidth * 2;
		var nameLength = this.textWidth('0') * 16 + 6;
		var iconWidth = Math.max(rect.width - nameLength, minIconArea);
		var nameWidth = rect.width - iconWidth;
		this.drawActorName(actor, rect.x + 0, rect.y, nameWidth);
    this.drawActorIcons(actor, rect.x + nameWidth, rect.y, iconWidth);
};

Window_BattleStatus.prototype.drawGaugeAreaWithTp = function(rect, actor) {
    var totalArea = this.gaugeAreaWidth() - 30;
		var hpW = parseInt(totalArea * 108 / 300);
		var otW = parseInt(totalArea * 96 / 300);
		this.drawActorHp(actor, rect.x + 0, rect.y, hpW);
    this.drawActorMp(actor, rect.x + hpW + 15, rect.y, otW);
    this.drawActorTp(actor, rect.x + hpW + otW + 30, rect.y, otW);
};

Window_BattleStatus.prototype.drawGaugeAreaWithoutTp = function(rect, actor) {
		var totalArea = this.gaugeAreaWidth() - 15;
		var hpW = parseInt(totalArea * 201 / 315);
		var otW = parseInt(totalArea * 114 / 315);
		this.drawActorHp(actor, rect.x + 0, rect.y, hpW);
    this.drawActorMp(actor, rect.x + hpW + 15,  rect.y, otW);
};

//=============================================================================
// Window_BattleLog
//=============================================================================

Window_BattleLog.prototype.showNormalAnimation = function(targets,
animationId, mirror) {
    var animation = $dataAnimations[animationId];
    if (animation) {
			if (animation.position === 3) {
				targets.forEach(function(target) {
						target.startAnimation(animationId, mirror, 0);
				});
			} else {
					var delay = this.animationBaseDelay();
        	var nextDelay = this.animationNextDelay();
        	targets.forEach(function(target) {
            	target.startAnimation(animationId, mirror, delay);
            	delay += nextDelay;
        	});
			}
    }
};

//=============================================================================
// New Function
//=============================================================================

Yanfly.Util = Yanfly.Util || {};

Yanfly.Util.toGroup = function(inVal) {
	if (typeof inVal !== 'string') { inVal = String(inVal); }
	if (!eval(Yanfly.Param.DigitGroup)) return inVal;
	return inVal.replace(/(^|[^\w.])(\d{4,})/g, function($0, $1, $2) {
		return $1 + $2.replace(/\d(?=(?:\d\d\d)+(?!\d))/g, "$&,");
	});
	return returnNum;
};

//=============================================================================
// End of File
//=============================================================================

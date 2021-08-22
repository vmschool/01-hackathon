import './styles.css'

import {ContextMenu} from './menu'
import {ClicksModule} from './modules/clicks.module'
import {ShapeModule} from './modules/shape.module'
import {TimerModule} from './modules/timer.module'
import {SoundModule} from './modules/sound.module'
import {BackgroundModule} from './modules/background.module'
import {BackgroundImageModule} from './modules/background-image.module'
import {MessageModule} from './modules/message.module'
import {ColorsModule} from './modules/colors.module'
import {BlocksModule} from './modules/blocks.module'
import {NotepadModule} from './modules/notepad.module'

const contextMenu = new ContextMenu('#menu')

contextMenu.add(new ClicksModule())
contextMenu.add(new ShapeModule())
contextMenu.add(new TimerModule())
contextMenu.add(new SoundModule())
contextMenu.add(new BackgroundModule())
contextMenu.add(new BackgroundImageModule())
contextMenu.add(new MessageModule())
contextMenu.add(new ColorsModule())
contextMenu.add(new BlocksModule())
contextMenu.add(new NotepadModule())

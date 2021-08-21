import './styles.css'
import {ContextMenu} from "@/menu"
import {TestModule} from "@/modules/test.module"

const contextMenu = new ContextMenu("#menu")

contextMenu.add(new TestModule('test', 'Тест'))

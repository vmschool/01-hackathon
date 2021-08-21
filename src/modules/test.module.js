import {Module} from '@/core/module'

export class TestModule extends Module {
    constructor(type, text) {
        super(type, text)
    }

    trigger() {
        console.log('test click')
    }
}
import React from 'react'
import Key from './Key'
import './KeyBoard.css'

function KeyBoard() {

    return (
        <div className='keyboard-container'>
                <Key character={'`'} shift={'~'}/>
                <Key character={'1'} shift={'!'}/>
                <Key character={'2'} shift={'@'}/>
                <Key character={'3'} shift={'#'}/>
                <Key character={'4'} shift={'$'}/>
                <Key character={'5'} shift={'%'}/>
                <Key character={'6'} shift={'^'}/>
                <Key character={'7'} shift={'&'}/>
                <Key character={'8'} shift={'*'}/>
                <Key character={'9'} shift={'('}/>
                <Key character={'0'} shift={')'}/>
                <Key character={'-'} shift={'_'}/>
                <Key character={'='} shift={'+'}/>
                <Key character={'backspace'}/>
                <Key character={'Tab'}/>
                <Key character={'q'}/>
                <Key character={'w'}/>
                <Key character={'e'}/>
                <Key character={'r'}/>
                <Key character={'t'}/>
                <Key character={'y'}/>
                <Key character={'u'}/>
                <Key character={'i'}/>
                <Key character={'o'}/>
                <Key character={'p'}/>
                <Key character={'['} shift={'{'}/>
                <Key character={']'} shift={'}'} />
                <Key character={'\\'} shift={'|'} />
                <Key character={'caps'}/>
                <Key character={'a'}/>
                <Key character={'s'}/>
                <Key character={'d'}/>
                <Key character={'f'}/>
                <Key character={'g'}/>
                <Key character={'h'}/>
                <Key character={'j'}/>
                <Key character={'k'}/>
                <Key character={'l'}/>
                <Key character={';'} shift={':'}/>
                <Key character={'\''} shift={'"'}/>
                <Key character={'enter'}/>
                <Key character={'shift'}/>
                <Key character={'z'}/>
                <Key character={'x'}/>
                <Key character={'c'}/>
                <Key character={'v'}/>
                <Key character={'b'}/>
                <Key character={'n'}/>
                <Key character={'m'}/>
                <Key character={','} shift={'<'}/>
                <Key character={'.'} shift={'>'}/>
                <Key character={'/'} shift={'?'}/>
                <Key character={'shift'}/>
        </div>
    )
}

export default KeyBoard
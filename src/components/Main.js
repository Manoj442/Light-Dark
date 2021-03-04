import React,{useContext} from 'react'
import {ThemeContext} from '../context/ThemeContext';
import '../styles/style.css'
const Main = () => {
    const {theme} = useContext(ThemeContext);
    return (
        <main className ={theme === 'light' ? 'light' : 'dark'}>
            <h2>
                Main content
            </h2>
            <p>
            Ea labore proident reprehenderit occaecat excepteur eiusmod eiusmod quis amet quis ut. Nulla consequat voluptate enim exercitation officia qui aute laborum dolore laborum qui consectetur. Nostrud ea Lorem labore occaecat nulla. Dolore nulla aliquip ut reprehenderit non esse. Eu do dolor fugiat adipisicing est id eu adipisicing consequat dolor duis reprehenderit adipisicing nostrud. Proident anim dolor enim fugiat ea quis occaecat dolore reprehenderit eu duis est aliquip fugiat.

Minim culpa aute labore pariatur deserunt in laborum Lorem do ea officia. Est velit voluptate aute ea do minim irure quis magna adipisicing id ut labore. Duis deserunt ea eu reprehenderit ullamco tempor in enim non aliqua officia amet. Minim ad cillum et pariatur qui Lorem nostrud ea. Non sint reprehenderit commodo officia aute magna voluptate ipsum non. Pariatur reprehenderit officia esse nulla do dolore est labore non duis dolor non reprehenderit.
</p>

<p>
Ea labore proident reprehenderit occaecat excepteur eiusmod eiusmod quis amet quis ut. Nulla consequat voluptate enim exercitation officia qui aute laborum dolore laborum qui consectetur. Nostrud ea Lorem labore occaecat nulla. Dolore nulla aliquip ut reprehenderit non esse. Eu do dolor fugiat adipisicing est id eu adipisicing consequat dolor duis reprehenderit adipisicing nostrud. Proident anim dolor enim fugiat ea quis occaecat dolore reprehenderit eu duis est aliquip fugiat.

Minim culpa aute labore pariatur deserunt in laborum Lorem do ea officia.
</p>
        </main>
    )
}

export default Main

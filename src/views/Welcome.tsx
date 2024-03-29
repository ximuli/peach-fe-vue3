import { defineComponent } from 'vue';
import { RouterView } from 'vue-router';
import s from './Welcome.module.scss'
import logo from './../assets/icons/mangosteen.svg'

export const Welcome = defineComponent({
  setup: (props, context) => {
    console.log('s', s)
    return () => (
      <div class={s.wrapper}>
        <header>
          <img src={ logo } alt="logo" />
          <h1>山竹记账</h1>
        </header>
        <main><RouterView /></main>
        <footer></footer>
      </div>
    )
  }
})
import './styles/index.scss'

import Button from './components/button/index'
import Radio from './components/radio/index'
import Checkbox from './components/checkbox/index'
import Input from './components/input/index'

const components = {
  Button,
  ButtonGroup: Button.group,
  Radio,
  RadioGroup: Radio.group,
  Checkbox,
  CheckboxGroup: Checkbox.group,
  Input
}

const install = function (Vue) {
  if (install.installed) return
  // components.map(component => Vue.component(component.name, component))
  Object.keys(components).forEach(key => {
    Vue.component(components[key].name, components[key])
  })

  // Vue.prototype.$modal = GlobalModal
  // Vue.prototype.$toast = Toast
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

const API = {
  install,
  ...components
}

export default API

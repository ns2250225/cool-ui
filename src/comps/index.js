import './styles/index.scss'

import Button from './components/button/index'
import Radio from './components/radio/index'
import Checkbox from './components/checkbox/index'
import Input from './components/input/index'
import InputNumber from './components/inputNumber/index'
import Switch from './components/switch/index'
import Message from './components/message/index'
import Badge from './components/badge/index'
import { Table, TableCol } from './components/table/index'
import Select from './components/select/index'
import Pagination from './components/pagination/index'
import Tooltip from './components/tooltip/index'
import Breadcrumb from './components/breadcrumb/index'
import { Tabs, Tab } from './components/tabs/index'
import Dialog from './components/dialog/index'
import { SidebarMenu, TopNav } from './components/navmenu/index'
import Transfer from './components/transfer/index'
import Upload from './components/upload/index'

const components = {
  Button,
  ButtonGroup: Button.group,
  Radio,
  RadioGroup: Radio.group,
  Checkbox,
  CheckboxGroup: Checkbox.group,
  Input,
  InputNumber,
  Switch,
  Message,
  Badge,
  Table,
  TableCol,
  Select,
  Pagination,
  Tooltip,
  Breadcrumb,
  Tabs,
  Tab,
  Dialog,
  SidebarMenu,
  TopNav,
  Transfer,
  Upload
}

const install = function (Vue) {
  if (install.installed) return
  // components.map(component => Vue.component(component.name, component))
  Object.keys(components).forEach(key => {
    Vue.component(components[key].name, components[key])
  })

  Vue.prototype.$message = Message
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

const API = {
  install,
  ...components
}

export default API

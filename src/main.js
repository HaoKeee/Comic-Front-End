import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import api from './http/api'
import http from './http/http'

import './assets/style/index.css'
import { ElIcon,ElButton,ElRadio,ElButtonGroup,ElDialog,ElInputNumber,ElImage,ElCheckbox,ElDivider,ElInput,ElForm,ElFormItem,ElUpload,ElScrollbar,ElAvatar,ElTabs,ElTabPane,ElSelect,ElOption,ElCarousel,ElCarouselItem,ElDropdown,ElDropdownMenu,ElDropdownItem } from 'element-plus'

// axios 拦截器
import './http/axios'

const app = createApp(App)
app.use(router)
app.config.globalProperties.$api = api
app.config.globalProperties.$http = http
app.component(ElIcon.name, ElIcon)
app.component(ElForm.name, ElForm)
app.component(ElTabs.name, ElTabs)
app.component(ElDialog.name, ElDialog)
app.component(ElImage.name, ElImage)
app.component(ElInput.name, ElInput)
app.component(ElRadio.name, ElRadio)
app.component(ElCheckbox.name, ElCheckbox)
app.component(ElSelect.name, ElSelect)
app.component(ElOption.name, ElOption)
app.component(ElUpload.name, ElUpload)
app.component(ElButton.name, ElButton)
app.component(ElAvatar.name, ElAvatar)
app.component(ElDivider.name, ElDivider)
app.component(ElTabPane.name, ElTabPane)
app.component(ElFormItem.name, ElFormItem)
app.component(ElCarousel.name, ElCarousel)
app.component(ElDropdown.name, ElDropdown)
app.component(ElScrollbar.name, ElScrollbar)
app.component(ElButtonGroup.name, ElButtonGroup)
app.component(ElInputNumber.name, ElInputNumber)
app.component(ElCarouselItem.name, ElCarouselItem)
app.component(ElDropdownMenu.name, ElDropdownMenu)
app.component(ElDropdownItem.name, ElDropdownItem)
app.mount('#app')

import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Button, ButtonStyle } from 'shared/ui/Button/Button'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher'
import { LangSwitcher } from 'widgets/LangSwitcher'
import { classNames } from 'shared/lib/helpers/classNames'
import * as classes from './Sidebar.module.scss'
import { use } from 'i18next'

export const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false)
  const { t } = useTranslation()

  const toggleCollapsed = () => {
    setCollapsed((prevState) => !prevState)
  }

  return (
    <aside className={classNames(classes.sidebar, [], { [classes.collapsed]: collapsed })}>
      <Button buttonStyle={ButtonStyle.TEXT} onClick={toggleCollapsed}>
        {t('Close')}
      </Button>
      <ThemeSwitcher />
      <LangSwitcher />
      <h2>{t('Sidebar')}</h2>
    </aside>
  )
}

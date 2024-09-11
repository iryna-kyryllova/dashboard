import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { Button, ButtonStyle } from 'shared/ui/Button/Button'
import * as classes from './ErrorPage.module.scss'

interface ErrorPageProps {
  errorMessage: string
}

export const ErrorPage: FC<ErrorPageProps> = ({ errorMessage }) => {
  const { t } = useTranslation()

  const handleReloadPage = () => {
    location.reload()
  }

  return (
    <div className={classes.error}>
      <div className={classes.container}>
        <h1 className={classes.title}>{t('Oops something went wrong')}...</h1>
        <strong className={classes.message}>
          {t('Error')}: {errorMessage}
        </strong>
        <Button
          className={classes.btn}
          buttonStyle={ButtonStyle.PRIMARY}
          onClick={handleReloadPage}>
          {t('Reload page')}
        </Button>
      </div>
    </div>
  )
}

const tg = window.Telegram.WebApp

export const useTelegram = () => {
  const onClose = () => tg.close()

  return {
    tg,
    user: tg.initDataUnsafe?.user,
    queryId: tg.initDataUnsafe?.query_id,
    onClose,
  }
}

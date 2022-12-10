import { MainLayout } from '@components/layouts'
import { ConverterForm } from '@views/Converter/ConverterForm/ConverterForm'
import { ConverterOptions } from '@views/Converter/ConverterOptions/ConverterOptions'

export const Converter = () => {
  return (
    <MainLayout>
      <ConverterForm/>
      <ConverterOptions/>
    </MainLayout>
  )
}

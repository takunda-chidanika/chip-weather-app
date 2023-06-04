import CityPicker from '@/components/CityPicker';
import { Card, Divider, Subtitle, Text } from '@tremor/react';

export default function Home() {
  return (
    <div className='min-h-screen bg-gradient-to-br from-[#394F68] to-[#183B78] p-10 flex flex-col justify-center items-center '>
      <Card className='max-w-4xl mx-auto'>
        <Text className='text-6xl font-bold text-center mb-10'>Chip Weather App</Text>
        <Subtitle className='text-xl text-center'>Powered By Open AI, Next 13.3, Tailiwind CSS, Tremor 2.0 + More!</Subtitle>
        <Divider className='my-10' />
        <Card className='bg-gradient-to-br from-[#394F68] to-[#183B78]'>
          <CityPicker/>
        </Card>
      </Card>
    </div>
  )
}

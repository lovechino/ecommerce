'use client'
import { Select } from 'antd';
import { Input } from 'antd';
const { TextArea } = Input;
const TabPickOnStore = () => {
    return (
        <>
            <div className='w-full'>
                <div className='flex justify-between'>
                    <div className='w-[45%]'>
                        <span className='uppercase text-blue-700'>tỉnh/thành phố</span>
                        <div className='mt-3'>
                            <Select
                                placeholder="Chọn Tỉnh/Thành phố"
                                className='w-full mt-10'
                            />
                        </div>
                    </div>
                    <div className='w-[45%]'>
                        <span className='uppercase text-blue-700'>quận/huyện</span>
                        <div className='mt-3'>
                            <Select
                                placeholder="Chọn quận/huyện"
                                className='w-full'
                            />
                        </div>
                    </div>
                </div>
                <div className='mt-3'>
                    <span className='uppercase text-blue-700'>cửa hàng</span>
                    <div className='mt-3'>
                        <Select
                            placeholder="Chọn địa chỉ cửa hàng"
                            className='w-full'
                        />
                    </div>
                </div>
                <div className='mt-3'>
                    <span className='uppercase text-blue-700'>Ghi chú</span>
                    <TextArea rows={3} maxLength={100} showCount />
                </div>
            </div>
        </>
    )
}

export default TabPickOnStore;


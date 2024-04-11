import React, { ChangeEvent, FC, createRef, useState } from 'react'
import Image from 'next/image'
import uploadPhoto from '@/app/assets/svg/uploadPhoto.svg'
import avatarPlaceholder from '@/app/assets/svg/avatarPlaceholder.svg'
import chosePhoto from '@/app/assets/svg/chosePhoto.svg'
import './styles.scss'

type Props = {
	handleChange: (f: File) => void
}

const UploadInputComponent: FC<Props> = ({ handleChange }) => {
	const [fileSrc, setFileSrc] = useState<string>('')
	const ref = createRef<HTMLInputElement>();
	const handleInputChange = ({ target: { files, value } }: ChangeEvent<HTMLInputElement>) => {
		const file = files ? files[0] : null
		if (file && file.type.startsWith('image/')) {
			const reader = new FileReader()
			reader.onload = (ev: ProgressEvent<FileReader>) => {
				ev.target && setFileSrc(ev.target.result as string)
			}
			reader.readAsDataURL(file)
			return handleChange(file)
		}
		setFileSrc('')
		// @TODO will be update to toast
	}

	const resetInput = () => {
		if (ref.current) {
			ref.current.value = ''
		}
		setFileSrc('')
	}

	return (
		<div className='upload-input-container'>
			<Image
				src={fileSrc ? fileSrc : avatarPlaceholder}
				width={96}
				height={96}
				alt='avatarPlaceholder'
				className='upload-input-image'
			/>

			<label htmlFor='input-file' className='upload-input-label'></label>
			{fileSrc ? <button className='upload-input-chose' onClick={() => resetInput()}>
				X
			</button> : <Image src={chosePhoto} alt='avatarPlaceholder' className='upload-input-chose' />}
			<input
				className='upload-input-input'
				accept='image/*'
				type='file'
				ref={ref}
				id='input-file'
				onChange={handleInputChange}
			/>
		</div>
	)
}

export default UploadInputComponent

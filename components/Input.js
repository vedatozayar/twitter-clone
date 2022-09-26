import {
  CalendarIcon,
  ChartBarIcon,
  EmojiHappyIcon,
  PhotographIcon,
  XIcon,
} from '@heroicons/react/outline';

import React, { useRef, useState } from 'react';
import data from '@emoji-mart/data';
import Picker from '@emoji-mart/react';

function Input() {
  const [input, setInput] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);
  const filePickerRef = useRef(null);
  const [showEmojis, setShowEmojis] = useState(false);

  const addImageToPost = () => {};
  const addEmoji = (e) => {
    setInput(input + e.native);
  };

  return (
    <div
      className={`border-b border-gray-700 p-3 flex space-x-3 overflow-y-scroll`}
    >
      <img
        src='https://media-exp1.licdn.com/dms/image/C5603AQH0_ZArQNwFGQ/profile-displayphoto-shrink_400_400/0/1617141657757?e=1669852800&v=beta&t=EzPwyFlvoW6p65e1TTAj9TubbS1q4mULWnhZQStZe38'
        alt=''
        className='h-11 w-10 rounded-full cursor-pointer'
      />
      <div className='w-full divide-y divide-gray-700'>
        <div className={`${selectedFile && 'pb-7'} ${input && 'space-y-2.5'}`}>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            rows='2'
            placeholder="What's happening?"
            className='bg-transparent outline-none text-[#d9d9d9] placeholder-gray-500 tracking-wide w-full min-h-[50px] '
          />
          {selectedFile && (
            <div className='relative'>
              <div
                className='absolute w-8 h-8 bg-[#15181c] hover:bg-[#272c26] bg-opacity-75 rounded-full flex items-center justify-center top-1 left-1 cursor-pointer'
                onClick={() => setSelectedFile(null)}
              >
                <XIcon className='text-white h-5' />
              </div>
              <img
                src={selectedFile}
                alt=''
                className='rounded-2xl max-h-80 object-contain'
              />
            </div>
          )}
        </div>
        <div className='flex items-center justify-between pt-2.5'>
          <div className='flex items-center'>
            <div className='icon' onClick={() => filePickerRef.current.click()}>
              <PhotographIcon className='h-[22px] text-[#1d9bf0] ' />
              <input
                type='file'
                onChange={addImageToPost}
                hidden
                ref={filePickerRef}
              />
            </div>
            <div className='icon rotate-90'>
              <ChartBarIcon className='text-[#1d9bf0] h-[22px]' />
            </div>

            <div className='icon' onClick={() => setShowEmojis(!showEmojis)}>
              <EmojiHappyIcon className='text-[#1d9bf0] h-[22px]' />
            </div>

            <div className='icon'>
              <CalendarIcon className='text-[#1d9bf0] h-[22px]' />
            </div>
            <div className='absolute mt-[465px] ml-[-40px] max-w-[320px] rounded-3xl'>
              {showEmojis && (
                <Picker
                  onSelect={addEmoji}
                  theme='dark'
                  onEmojiSelect={addEmoji}
                />
              )}
            </div>
          </div>
          <button
            className='bg-[#1d9bf0] text-white rounded-full px-4 py-1.5 font-bold shadow-md hover:bg-[#1a8cd8] disabled:hover:bg-[#1d9bf0] disabled:opacity-50 disabled:cursor-default'
            disabled={!input.trim() && !selectedFile}
            //onClick={sendPost}
          >
            Tweet
          </button>
        </div>
      </div>
    </div>
  );
}

export default Input;
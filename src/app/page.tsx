'use client'

import Timeline from '@/components/atoms/Timeline'
import { useState } from 'react'

export default function Home() {
  const [title, setTitle] = useState<string[]>([
    'Eat',
    'Code',
    'Sleep',
    'Repeat',
  ])
  const [titleInput, setTitleInput] = useState('')

  const [alternateContent, setAlternateContent] = useState<string[]>([
    'Alternate Content',
    'Alternate Content 2',
  ])
  const [alternateContentInput, setAlternateContentInput] = useState('')

  const [description, setDescription] = useState<string[]>([
    'Description 1',
    'Description 2',
  ])
  const [descriptionInput, setDescriptionInput] = useState('')

  const handleTitle = () => {
    if (titleInput !== '') {
      setTitle((prevTitles) => [...prevTitles, titleInput])
      setTitleInput('')
    }
  }

  const handleAlternateContent = () => {
    if (alternateContentInput !== '') {
      setAlternateContent((prevAlternateContent) => [
        ...prevAlternateContent,
        alternateContentInput,
      ])
      setAlternateContentInput('')
    }
  }

  const handleDescription = () => {
    if (descriptionInput !== '') {
      setDescription((prevDescriptions) => [
        ...prevDescriptions,
        descriptionInput,
      ])
      setDescriptionInput('')
    }
  }

  return (
    <main className="flex h-[100vh] w-[100vw] flex-col justify-start bg-gray-800">
      <div className="mx-10 my-4 flex w-fit flex-col gap-2">
        <input
          className="rounded-md px-4 py-2 text-black"
          type="text"
          placeholder="titulo aqui"
          value={titleInput}
          onChange={(e) => setTitleInput(e.target.value)}
        />
        <button
          className="rounded-md bg-slate-900 px-4 py-2 font-bold text-white"
          onClick={() => handleTitle()}
        >
          Setar Titulo
        </button>

        <input
          className="rounded-md px-4 py-2 text-black"
          type="text"
          placeholder="alternate content aqui"
          value={alternateContentInput}
          onChange={(e) => setAlternateContentInput(e.target.value)}
        />
        <button
          className="rounded-md bg-slate-900 px-4 py-2 font-bold text-white"
          onClick={() => handleAlternateContent()}
        >
          Setar Conteudo Alternativo
        </button>

        <input
          className="rounded-md px-4 py-2 text-black"
          type="text"
          placeholder="descricao aqui"
          value={descriptionInput}
          onChange={(e) => setDescriptionInput(e.target.value)}
        />
        <button
          className="rounded-md bg-slate-900 px-4 py-2 font-bold text-white"
          onClick={() => handleDescription()}
        >
          Setar Descricao
        </button>
      </div>
      <Timeline alternateContent={alternateContent} description={description}>
        {title}
      </Timeline>
    </main>
  )
}

import * as Tabs from '@radix-ui/react-tabs'
import { useState } from 'react'

import { CreateTodoForm } from '@/client/components/CreateTodoForm'
import { TodoList } from '@/client/components/TodoList'

/**
 * QUESTION 6:
 * -----------
 * Implement quick filter/tab feature so that we can quickly find todos with
 * different statuses ("pending", "completed", or both). The UI should look like
 * the design on Figma.
 *
 * NOTE:
 *  - For this question, you must use RadixUI Tabs component. Its Documentation
 *  is linked below.
 *
 * Documentation references:
 *  - https://www.radix-ui.com/docs/primitives/components/tabs
 */

const tabItems = ['All', 'Pending', 'Completed']

const Index = () => {
  const [activeTab, setActiveTab] = useState<string>(String(tabItems[0]))
  const [statusNeedQuery, setStatusNeedQuery] = useState<
    ('completed' | 'pending')[]
  >(['completed', 'pending'])

  const handleTabsChange = (value: string) => {
    setActiveTab(value)
    if (value === tabItems[0]) {
      setStatusNeedQuery(['completed', 'pending'])
    } else if (value === tabItems[1]) {
      setStatusNeedQuery(['pending'])
    } else {
      setStatusNeedQuery(['completed'])
    }
  }

  return (
    <main className="mx-auto w-[480px] pt-12">
      <div className="rounded-12 bg-white p-8 shadow-sm">
        <h1 className="text-center text-4xl font-extrabold text-gray-900">
          Todo App
        </h1>

        <Tabs.Root
          className="pt-10"
          defaultValue={tabItems[0]}
          onValueChange={handleTabsChange}
        >
          <Tabs.List className="flex gap-2">
            {tabItems.map((item, index) => (
              <Tabs.Trigger
                key={index}
                value={item}
                aria-label={`${item} tab`}
                className={`rounded-full border-[1px] border-gray-200 p-6 py-3 text-sm font-bold ${
                  activeTab === item && 'border-0 bg-gray-700 text-white'
                }`}
              >
                {item}
              </Tabs.Trigger>
            ))}
          </Tabs.List>
        </Tabs.Root>

        <div className="pt-10">
          <TodoList statuses={statusNeedQuery} />
        </div>

        <div className="pt-10">
          <CreateTodoForm />
        </div>
      </div>
    </main>
  )
}

export default Index

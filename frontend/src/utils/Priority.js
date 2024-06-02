import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { useContext } from 'react'
import { TaskContext } from '../context/TaskProvider'

export default function Priority({ edit }) {
  const { setPriority } = useContext(TaskContext)

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <MenuButton disabled={edit} className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
          Task Priority
        </MenuButton>
      </div>

      <MenuItems className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
        <div className="py-1">
          <MenuItem>
            {({ active }) => (
              <div
                onClick={() => setPriority(1)}
                className={`block px-4 py-2 text-sm w-full text-left cursor-pointer ${active ? 'bg-gray-100 text-red-900' : 'text-red-700'
                  }`}
              >
                High 
              </div>
            )}
          </MenuItem>
          <MenuItem>
            {({ active }) => (
              <div
                onClick={() => setPriority(2)}
                className={`block px-4 py-2 text-sm w-full text-left cursor-pointer ${active ? 'bg-gray-100 text-orange-900' : 'text-orange-700'
                  }`}
              >
                Medium
              </div>
            )}
          </MenuItem>
          <MenuItem>
            {({ active }) => (
              <div
                onClick={() => setPriority(3)}
                className={`block px-4 py-2 text-sm w-full text-left cursor-pointer ${active ? 'bg-gray-100 text-green-900' : 'text-green-700'
                  }`}
              >
                Low
              </div>
            )}
          </MenuItem>
        </div>
      </MenuItems>
    </Menu>
  )
}

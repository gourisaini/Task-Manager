import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { useContext } from 'react'
import { TaskContext } from '../context/TaskProvider'

export default function DropDown({ edit }) {
  const { setStatus } = useContext(TaskContext)

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <MenuButton disabled={edit} className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
          Task Status
        </MenuButton>
      </div>

      <MenuItems className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
        <div className="py-1">
          <MenuItem>
            {({ active }) => (
              <div
                onClick={() => setStatus(true)}
                className={`block px-4 py-2 text-sm w-full text-left cursor-pointer ${active ? 'bg-gray-100 text-green-900' : 'text-green-700'
                  }`}
              >
                Completed
              </div>
            )}
          </MenuItem>
          <MenuItem>
            {({ active }) => (
              <div
                onClick={() => setStatus(false)}
                className={`block px-4 py-2 text-sm w-full text-left cursor-pointer ${active ? 'bg-gray-100 text-blue-900' : 'text-blue-700'
                  }`}
              >
                In progress
              </div>
            )}
          </MenuItem>
        </div>
      </MenuItems>
    </Menu>
  )
}


import { Disclosure } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/20/solid';

export default function Terms() {
  return (
    <div className="max-w-xl mx-auto mt-5 p-4">
      <h1 className="mb-4 text-2xl font-semibold text-gray-900">Terms and Conditions</h1>
      {[1, 2, 3].map((item) => (
        <Disclosure as="div" className="mb-4 border rounded" key={item}>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left bg-gray-200 rounded hover:bg-gray-300 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                Question #{item}
                <ChevronUpIcon
                  className={`${open ? 'transform rotate-180' : ''} w-5 h-5 text-gray-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel as="div" className="p-4 text-sm text-gray-500">
                <strong>This is the item #{item}s accordion body.</strong> It
                is hidden by default, until the appropriate classes are added.
                The transitions and appearances are controlled via TailwindCSS.
                You can modify any of this with custom CSS or Tailwind utilities.
                Its also worth noting that just about any HTML can go
                within the accordion body.
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      ))}
    </div>
  );
}


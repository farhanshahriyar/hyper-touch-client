import { ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Trendsetting Designs',
    description:
      'Our designers are at the forefront of the fashion industry, ensuring you always have access to the latest trends and styles.',
    icon: ArrowPathIcon,
  },
  {
    name: 'Ethical Sourcing',
    description:
      'We are committed to ethical sourcing and sustainability. Our products are made with respect for the environment and our workers.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Secure Shopping',
    description:
      'Shop with confidence. Our website uses advanced encryption methods to ensure your personal information is protected at all times.',
    icon: LockClosedIcon,
  },
  {
    name: 'Diverse Collections',
    description:
      'From everyday wear to exclusive designer collaborations, our diverse collections ensure there’s something for everyone.',
    icon: FingerPrintIcon,
  },
];

export default function Section2() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-black">Shop faster</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Welcome To The Celebration
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            This week Members get free shipping. Non-members get free shipping on orders over $50.
            To stay in the know, sign up for email and you’ll be the first to know about new collections, special events, and more.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}

import Image from 'next/image'

import cooper from '../../assets/medal-cooper.svg'
import gold from '../../assets/medal-gold.svg'
import silver from '../../assets/medal-silver.svg'

export function Ranking() {
  return (
    <div className="w-full max-w-[440px] space-y-5">
      <h2 className=" text-gray-200  text-xl font-heading font-semibold leading-none">
        Ranking de indicações
      </h2>
      <div className=" space-y-4">
        <div className=" relative Rounded-xl bg-gray-700  border boerder-gray-600 p-6 flex flex-col justify-center gap-3 ">
          <span className="text-sm text-gray-30 leading-none">
            <span className="font-semibold">1º</span> | Diego Fernandes
          </span>
          <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
            1030
          </span>

          <Image src={gold} alt="" className="absolut top-0 right-8" />
        </div>

        <div className=" relative Rounded-xl bg-gray-700  border boerder-gray-600 p-6 flex flex-col justify-center gap-3">
          <span className="text-sm text-gray-30 leading-none">
            <span className="font-semibold">2º</span> | Maria Eugenia
          </span>
          <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
            1030
          </span>

          <Image src={silver} alt="" className="absolut top-0 right-8" />
        </div>
        <div className=" relative Rounded-xl bg-gray-700  border boerder-gray-600 p-6 flex flex-col justify-center gap-3">
          <span className="text-sm text-gray-30 leading-none">
            <span className="font-semibold">3º</span> | Carminha Freitas
          </span>
          <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
            1030
          </span>

          <Image src={cooper} alt="" className="absolut top-0 right-8" />
        </div>
      </div>
    </div>
  )
}

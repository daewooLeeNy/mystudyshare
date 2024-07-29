'use client';

import Image from 'next/image';
import SettingDialog from '@/components/features/asset-goal/setting-dialog';
import { GoalAssetAttr, useAssetGoalAttributes } from '@/components/features/asset-goal/goal-assets-context';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';


const Header = () => {
  const pathname = usePathname();
  const assetAttr = useAssetGoalAttributes()

  const onChangeOptions = ({inflation, isApplyInflation, isDividendGoal}:Partial<Pick<GoalAssetAttr, 'inflation' | 'isApplyInflation' | 'isDividendGoal'>>) => {
    assetAttr.setAssetAttributes({inflation, isDividendGoal, isApplyInflation})
  }

  return (
    <main className="sticky top-0 z-50 w-full p-4 border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex items-center justify-between w-full max-w-screen-lg mx-auto"> 
        <div className="flex items-center gap-12">
          <div className="flex gap-2">
            <Image src="/logo.png" width="30" height="30" alt="freeder logo"/>
            <h1 className="text-black text-xl font-bold">Freeder</h1>
          </div>

          <nav className="space-x-8">
            <Link href="/goal-line" className={cn('text-gray-600', getSelectedClassNames(pathname === '/goal-line'))} title="낙원 시간 계산기">낙원 기간 🏁</Link>
            <Link href="/goal-assets" className={cn('text-gray-600', getSelectedClassNames(pathname === '/goal-assets'))} title="낙원 자산 계산기">낙원 자산 💰</Link>
            <Link href="/goal-interest" className={cn('text-gray-600', getSelectedClassNames(pathname === '/goal-interest'))} title="목표 수익율">목표 수익율</Link>
          </nav>
        </div>
        <SettingDialog inflation={assetAttr.inflation} isApplyInflation={assetAttr.isApplyInflation} isDividendGoal={assetAttr.isDividendGoal} onChange={onChangeOptions} className="xs:hidden"/>
      </div>
    </main>
  )
}

const getSelectedClassNames = (selected:boolean) => {
  return  selected ? 'font-bold text-black' : ''

}
export default Header;
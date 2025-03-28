
import React from 'react';
import { cn } from '@/lib/utils';
import { ArrowDownIcon, ArrowUpIcon } from 'lucide-react';

interface AdMetricCardProps {
  icon: React.ReactNode;
  label: string;
  value: string | number;
  change?: string;
  iconBackground?: string;
}

const AdMetricCard = ({ icon, label, value, change, iconBackground = "bg-blue-500" }: AdMetricCardProps) => {
  const isPositive = change ? !change.includes('-') : false;
  
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <div className="flex flex-col">
        <div className="flex items-center justify-between mb-4">
          <div className={cn("p-3 rounded-full text-white", iconBackground)}>
            {icon}
          </div>
          
          {change && (
            <div className={cn("flex items-center text-sm font-medium", 
              isPositive ? "text-green-500" : "text-red-500"
            )}>
              {isPositive ? <ArrowUpIcon size={16} /> : <ArrowDownIcon size={16} />}
              <span>{change}</span>
            </div>
          )}
        </div>
        
        <div className="mt-1">
          <p className="text-sm text-gray-500 mb-1">{label}</p>
          <p className="text-2xl font-bold">{value}</p>
        </div>
      </div>
    </div>
  );
};

export default AdMetricCard;

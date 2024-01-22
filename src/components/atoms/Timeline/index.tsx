import { getMaxSize } from '@/services/utils/getMaxSize'
import { handleIcons } from '@/services/utils/handleIcons'
import {
  handleAlternating,
  handleReversedAlternating,
} from '@/services/utils/handleAlternating'
import { TimelineProps } from './types'
import { cn } from '@/services/utils/className'
import { FaCircle, FaRegCircle } from 'react-icons/fa'

const Timeline = ({
  children,
  dotColor = ['#ff0000'],
  iconBackground,
  textAlign = 'left',
  icon,
  outlined = false,
  baseColor = '#65737e',
  alternateContent,
  description,
  titleSize = 16,
  alternateContentSize = 16,
  descriptionSize = 12,
  titleColor = ['#fff'],
  titleBaseColor = '#fff',
  alternateContentColor = ['#fff'],
  alternateContentBaseColor = '#fff',
  descriptionColor = ['#fff'],
  descriptionBaseColor = '#fff',
  titleWeight = '700',
  alternateContentWeight = '400',
  descriptionWeight = '400',
  pathColor = ['#65737e'],
  pathBaseColor = '#65737e',
  ...props
}: TimelineProps) => {
  return (
    <div className="flex flex-col items-center justify-center" {...props}>
      {children.map((item, index) => (
        <ul key={index} className="items-center justify-center">
          <li
            className={cn(
              'flex flex-1 flex-row',
              textAlign === 'left' && 'flex-row-reverse',
              textAlign === 'alternating' && index % 2 && 'flex-row-reverse',
              textAlign === 'reversed-alternating' &&
                !(index % 2) &&
                'flex-row-reverse',
            )}
          >
            {
              <span
                style={{
                  minWidth: `${getMaxSize(
                    children,
                    alternateContent,
                    description,
                  )}ch`,
                  color:
                    alternateContentColor[index] || alternateContentBaseColor,
                  fontSize: alternateContentSize,
                }}
                className={cn(
                  'flex flex-1 opacity-70',
                  alternateContentWeight,
                  (textAlign === 'alternating' && index % 2) ||
                    (textAlign === 'reversed-alternating' &&
                      !(index % 2) &&
                      'justify-start'),
                  ((textAlign === 'alternating' && !(index % 2)) ||
                    textAlign === 'right' ||
                    (textAlign === 'reversed-alternating' && index % 2)) &&
                    'justify-end',
                  iconBackground &&
                    iconBackground[index] !== undefined &&
                    index &&
                    'translate-y-2',
                )}
              >
                {alternateContent && alternateContent[index]}
              </span>
            }
            <div className="flex flex-col items-center justify-center">
              <div
                className={cn(
                  'mx-1 flex rounded-full p-2',
                  iconBackground &&
                    iconBackground[index] !== undefined &&
                    index &&
                    'mx-3 my-2',
                  iconBackground &&
                    iconBackground[index] !== undefined &&
                    !index &&
                    'mx-3 mb-2',
                )}
                style={{
                  color: dotColor[index] || baseColor,
                  backgroundColor:
                    (iconBackground && iconBackground[index]) || 'transparent',
                }}
              >
                {handleIcons(
                  index,
                  outlined,
                  <FaCircle />,
                  <FaRegCircle />,
                  icon,
                )}
              </div>
              {children.length - 1 !== index && (
                <div
                  style={{ backgroundColor: pathColor[index] || pathBaseColor }}
                  className="flex h-14 w-[2px]"
                />
              )}
            </div>
            <div
              className={cn(
                'flex flex-1 flex-col',
                iconBackground &&
                  iconBackground[index] !== undefined &&
                  index > 0 &&
                  'translate-y-2',
              )}
            >
              <span
                style={{
                  minWidth: `${getMaxSize(
                    children,
                    alternateContent,
                    description,
                  )}ch`,
                  color: titleColor[index] || titleBaseColor,
                  fontSize: titleSize,
                }}
                className={cn(
                  'flex flex-1 items-start opacity-100',
                  titleWeight,
                  textAlign === 'left' && 'justify-end',
                  textAlign === 'right' && 'justify-start',
                  handleAlternating(index, textAlign),
                  handleReversedAlternating(index, textAlign),
                )}
              >
                {item}
              </span>
              <p
                style={{
                  minWidth: `${getMaxSize(
                    children,
                    alternateContent,
                    description,
                  )}ch`,
                  color: descriptionColor[index] || descriptionBaseColor,
                  fontSize: descriptionSize,
                }}
                className={cn(
                  'flex flex-1 -translate-y-5 cursor-default items-start opacity-100',
                  descriptionWeight,
                  textAlign === 'left' && 'justify-end opacity-100',
                  textAlign === 'right' && 'justify-start opacity-100',
                  handleAlternating(index, textAlign),
                  handleReversedAlternating(index, textAlign),
                )}
              >
                {description && description[index]}
              </p>
            </div>
          </li>
        </ul>
      ))}
    </div>
  )
}

export default Timeline

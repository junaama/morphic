import { ArrowRight } from 'lucide-react'

import { Button } from '@/components/ui/button'

const exampleMessages = [
  {
    heading: 'Beis Weekender Normal Size Less than $175',
    message: 'Looking for Beis Weekender Normal Size Less than $175'
  },
  {
    heading: 'Puma Cali Black Size 8.5 White Less Than $100',
    message: 'Looking for Puma Cali Black Size 8.5 White Less Than $100'
  },
  {
    heading: 'Peppermayo Blue Eden Dress Size Medium Less Than $50',
    message: 'Looking for Peppermayo Blue Eden Dress Size Medium Less Than $50'
  },
  {
    heading: 'Pastel Blue Labubu Keychain Less Than $40',
    message: 'Looking for Pastel Blue Labubu Keychain Less Than $40'
  }
]
export function EmptyScreen({
  submitMessage,
  className
}: {
  submitMessage: (message: string) => void
  className?: string
}) {
  return (
    <div className={`mx-auto w-full transition-all ${className}`}>
      <div className="bg-background p-2">
        <div className="mt-2 flex flex-col items-start space-y-2 mb-4">
          {exampleMessages.map((message, index) => (
            <Button
              key={index}
              variant="link"
              className="h-auto p-0 text-base"
              name={message.message}
              onClick={async () => {
                submitMessage(message.message)
              }}
            >
              <ArrowRight size={16} className="mr-2 text-muted-foreground" />
              {message.heading}
            </Button>
          ))}
        </div>
      </div>
    </div>
  )
}

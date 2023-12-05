import {
  MessageReceived as MessageReceivedEvent,
  MessageSent as MessageSentEvent,
  OwnershipTransferRequested as OwnershipTransferRequestedEvent,
  OwnershipTransferred as OwnershipTransferredEvent
} from "../generated/Sender/Sender"
import {
  MessageReceived,
  MessageSent,
  OwnershipTransferRequested,
  OwnershipTransferred
} from "../generated/schema"

export function handleMessageReceived(event: MessageReceivedEvent): void {
  let entity = new MessageReceived(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.messageId = event.params.messageId
  entity.sourceChainSelector = event.params.sourceChainSelector
  entity.sender = event.params.sender
  entity.borrower = event.params.borrower
  entity.tokenAmount_token = event.params.tokenAmount.token
  entity.tokenAmount_amount = event.params.tokenAmount.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleMessageSent(event: MessageSentEvent): void {
  let entity = new MessageSent(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.messageId = event.params.messageId
  entity.destinationChainSelector = event.params.destinationChainSelector
  entity.receiver = event.params.receiver
  entity.depositor = event.params.depositor
  entity.tokenAmount_token = event.params.tokenAmount.token
  entity.tokenAmount_amount = event.params.tokenAmount.amount
  entity.fees = event.params.fees

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOwnershipTransferRequested(
  event: OwnershipTransferRequestedEvent
): void {
  let entity = new OwnershipTransferRequested(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.from = event.params.from
  entity.to = event.params.to

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent
): void {
  let entity = new OwnershipTransferred(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.from = event.params.from
  entity.to = event.params.to

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Bytes, BigInt, Address } from "@graphprotocol/graph-ts"
import { MessageReceived } from "../generated/schema"
import { MessageReceived as MessageReceivedEvent } from "../generated/Sender/Sender"
import { handleMessageReceived } from "../src/sender"
import { createMessageReceivedEvent } from "./sender-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let messageId = Bytes.fromI32(1234567890)
    let sourceChainSelector = BigInt.fromI32(234)
    let sender = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let borrower = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let tokenAmount = "ethereum.Tuple Not implemented"
    let newMessageReceivedEvent = createMessageReceivedEvent(
      messageId,
      sourceChainSelector,
      sender,
      borrower,
      tokenAmount
    )
    handleMessageReceived(newMessageReceivedEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("MessageReceived created and stored", () => {
    assert.entityCount("MessageReceived", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "MessageReceived",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "messageId",
      "1234567890"
    )
    assert.fieldEquals(
      "MessageReceived",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "sourceChainSelector",
      "234"
    )
    assert.fieldEquals(
      "MessageReceived",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "sender",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "MessageReceived",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "borrower",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "MessageReceived",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "tokenAmount",
      "ethereum.Tuple Not implemented"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})

import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  AdminChanged,
  BeaconUpgraded,
  FundManagerCreated,
  ImplementationUpdated,
  Initialized,
  OwnershipTransferStarted,
  OwnershipTransferred,
  ProtocolLibInfoUpdated,
  SetNewFundManagerImplForProxy,
  Upgraded
} from "../generated/FactoryContract/FactoryContract"

export function createAdminChangedEvent(
  previousAdmin: Address,
  newAdmin: Address
): AdminChanged {
  let adminChangedEvent = changetype<AdminChanged>(newMockEvent())

  adminChangedEvent.parameters = new Array()

  adminChangedEvent.parameters.push(
    new ethereum.EventParam(
      "previousAdmin",
      ethereum.Value.fromAddress(previousAdmin)
    )
  )
  adminChangedEvent.parameters.push(
    new ethereum.EventParam("newAdmin", ethereum.Value.fromAddress(newAdmin))
  )

  return adminChangedEvent
}

export function createBeaconUpgradedEvent(beacon: Address): BeaconUpgraded {
  let beaconUpgradedEvent = changetype<BeaconUpgraded>(newMockEvent())

  beaconUpgradedEvent.parameters = new Array()

  beaconUpgradedEvent.parameters.push(
    new ethereum.EventParam("beacon", ethereum.Value.fromAddress(beacon))
  )

  return beaconUpgradedEvent
}

export function createFundManagerCreatedEvent(
  fundManager: Address,
  user: Address,
  label: string
): FundManagerCreated {
  let fundManagerCreatedEvent = changetype<FundManagerCreated>(newMockEvent())

  fundManagerCreatedEvent.parameters = new Array()

  fundManagerCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "fundManager",
      ethereum.Value.fromAddress(fundManager)
    )
  )
  fundManagerCreatedEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  fundManagerCreatedEvent.parameters.push(
    new ethereum.EventParam("label", ethereum.Value.fromString(label))
  )

  return fundManagerCreatedEvent
}

export function createImplementationUpdatedEvent(
  previousImpl: Address,
  newImpl: Address,
  typeId: BigInt
): ImplementationUpdated {
  let implementationUpdatedEvent = changetype<ImplementationUpdated>(
    newMockEvent()
  )

  implementationUpdatedEvent.parameters = new Array()

  implementationUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "previousImpl",
      ethereum.Value.fromAddress(previousImpl)
    )
  )
  implementationUpdatedEvent.parameters.push(
    new ethereum.EventParam("newImpl", ethereum.Value.fromAddress(newImpl))
  )
  implementationUpdatedEvent.parameters.push(
    new ethereum.EventParam("typeId", ethereum.Value.fromUnsignedBigInt(typeId))
  )

  return implementationUpdatedEvent
}

export function createInitializedEvent(version: i32): Initialized {
  let initializedEvent = changetype<Initialized>(newMockEvent())

  initializedEvent.parameters = new Array()

  initializedEvent.parameters.push(
    new ethereum.EventParam(
      "version",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(version))
    )
  )

  return initializedEvent
}

export function createOwnershipTransferStartedEvent(
  previousOwner: Address,
  newOwner: Address
): OwnershipTransferStarted {
  let ownershipTransferStartedEvent = changetype<OwnershipTransferStarted>(
    newMockEvent()
  )

  ownershipTransferStartedEvent.parameters = new Array()

  ownershipTransferStartedEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  ownershipTransferStartedEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownershipTransferStartedEvent
}

export function createOwnershipTransferredEvent(
  previousOwner: Address,
  newOwner: Address
): OwnershipTransferred {
  let ownershipTransferredEvent = changetype<OwnershipTransferred>(
    newMockEvent()
  )

  ownershipTransferredEvent.parameters = new Array()

  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownershipTransferredEvent
}

export function createProtocolLibInfoUpdatedEvent(
  typeId: BigInt,
  lib: Address
): ProtocolLibInfoUpdated {
  let protocolLibInfoUpdatedEvent = changetype<ProtocolLibInfoUpdated>(
    newMockEvent()
  )

  protocolLibInfoUpdatedEvent.parameters = new Array()

  protocolLibInfoUpdatedEvent.parameters.push(
    new ethereum.EventParam("typeId", ethereum.Value.fromUnsignedBigInt(typeId))
  )
  protocolLibInfoUpdatedEvent.parameters.push(
    new ethereum.EventParam("lib", ethereum.Value.fromAddress(lib))
  )

  return protocolLibInfoUpdatedEvent
}

export function createSetNewFundManagerImplForProxyEvent(
  proxy: Address,
  newImpl: Address,
  typeId: BigInt
): SetNewFundManagerImplForProxy {
  let setNewFundManagerImplForProxyEvent = changetype<
    SetNewFundManagerImplForProxy
  >(newMockEvent())

  setNewFundManagerImplForProxyEvent.parameters = new Array()

  setNewFundManagerImplForProxyEvent.parameters.push(
    new ethereum.EventParam("proxy", ethereum.Value.fromAddress(proxy))
  )
  setNewFundManagerImplForProxyEvent.parameters.push(
    new ethereum.EventParam("newImpl", ethereum.Value.fromAddress(newImpl))
  )
  setNewFundManagerImplForProxyEvent.parameters.push(
    new ethereum.EventParam("typeId", ethereum.Value.fromUnsignedBigInt(typeId))
  )

  return setNewFundManagerImplForProxyEvent
}

export function createUpgradedEvent(implementation: Address): Upgraded {
  let upgradedEvent = changetype<Upgraded>(newMockEvent())

  upgradedEvent.parameters = new Array()

  upgradedEvent.parameters.push(
    new ethereum.EventParam(
      "implementation",
      ethereum.Value.fromAddress(implementation)
    )
  )

  return upgradedEvent
}

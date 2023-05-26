import {
  AdminChanged as AdminChangedEvent,
  BeaconUpgraded as BeaconUpgradedEvent,
  FundManagerCreated as FundManagerCreatedEvent,
  ImplementationUpdated as ImplementationUpdatedEvent,
  Initialized as InitializedEvent,
  OwnershipTransferStarted as OwnershipTransferStartedEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
  ProtocolLibInfoUpdated as ProtocolLibInfoUpdatedEvent,
  SetNewFundManagerImplForProxy as SetNewFundManagerImplForProxyEvent,
  Upgraded as UpgradedEvent
} from "../generated/FactoryContract/FactoryContract"
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
} from "../generated/schema"

export function handleAdminChanged(event: AdminChangedEvent): void {
  let entity = new AdminChanged(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.previousAdmin = event.params.previousAdmin
  entity.newAdmin = event.params.newAdmin
  entity.save()
}

export function handleBeaconUpgraded(event: BeaconUpgradedEvent): void {
  let entity = new BeaconUpgraded(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.beacon = event.params.beacon
  entity.save()
}

export function handleFundManagerCreated(event: FundManagerCreatedEvent): void {
  let entity = new FundManagerCreated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.fundManager = event.params.fundManager
  entity.user = event.params.user
  entity.label = event.params.label
  entity.save()
}

export function handleImplementationUpdated(
  event: ImplementationUpdatedEvent
): void {
  let entity = new ImplementationUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.previousImpl = event.params.previousImpl
  entity.newImpl = event.params.newImpl
  entity.typeId = event.params.typeId
  entity.save()
}

export function handleInitialized(event: InitializedEvent): void {
  let entity = new Initialized(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.version = event.params.version
  entity.save()
}

export function handleOwnershipTransferStarted(
  event: OwnershipTransferStartedEvent
): void {
  let entity = new OwnershipTransferStarted(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner
  entity.save()
}

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent
): void {
  let entity = new OwnershipTransferred(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner
  entity.save()
}

export function handleProtocolLibInfoUpdated(
  event: ProtocolLibInfoUpdatedEvent
): void {
  let entity = new ProtocolLibInfoUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.typeId = event.params.typeId
  entity.lib = event.params.lib
  entity.save()
}

export function handleSetNewFundManagerImplForProxy(
  event: SetNewFundManagerImplForProxyEvent
): void {
  let entity = new SetNewFundManagerImplForProxy(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.proxy = event.params.proxy
  entity.newImpl = event.params.newImpl
  entity.typeId = event.params.typeId
  entity.save()
}

export function handleUpgraded(event: UpgradedEvent): void {
  let entity = new Upgraded(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.implementation = event.params.implementation
  entity.save()
}

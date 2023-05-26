import {
  CodeUpdated as CodeUpdatedEvent,
  FundsAdded as FundsAddedEvent,
  Initialized as InitializedEvent,
  LiquidityAdded as LiquidityAddedEvent,
  LiquidityWithdrawn as LiquidityWithdrawnEvent,
  RoleAdminChanged as RoleAdminChangedEvent,
  RoleGranted as RoleGrantedEvent,
  RoleRevoked as RoleRevokedEvent,
  VaultCreated as VaultCreatedEvent
} from "../generated/ChildContract/ChildContract"
import {
  CodeUpdated,
  FundsAdded,
  Initialized,
  LiquidityAdded,
  LiquidityWithdrawn,
  RoleAdminChanged,
  RoleGranted,
  RoleRevoked,
  VaultCreated
} from "../generated/schema"

export function handleCodeUpdated(event: CodeUpdatedEvent): void {
  let entity = new CodeUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.uuid = event.params.uuid
  entity.codeAddress = event.params.codeAddress
  entity.save()
}

export function handleFundsAdded(event: FundsAddedEvent): void {
  let entity = new FundsAdded(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._user = event.params._user
  entity._investmentAmount = event.params._investmentAmount
  entity._sharesReceived = event.params._sharesReceived
  entity.save()
}

export function handleInitialized(event: InitializedEvent): void {
  let entity = new Initialized(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.version = event.params.version
  entity.save()
}

export function handleLiquidityAdded(event: LiquidityAddedEvent): void {
  let entity = new LiquidityAdded(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.user = event.params.user
  entity.externalPosition = event.params.externalPosition
  entity.nftId = event.params.nftId
  entity.liquidityAdded = event.params.liquidityAdded
  entity.save()
}

export function handleLiquidityWithdrawn(event: LiquidityWithdrawnEvent): void {
  let entity = new LiquidityWithdrawn(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.user = event.params.user
  entity.externalPosition = event.params.externalPosition
  entity.nftId = event.params.nftId
  entity.liquidityWithdrawn = event.params.liquidityWithdrawn
  entity.save()
}

export function handleRoleAdminChanged(event: RoleAdminChangedEvent): void {
  let entity = new RoleAdminChanged(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.role = event.params.role
  entity.previousAdminRole = event.params.previousAdminRole
  entity.newAdminRole = event.params.newAdminRole
  entity.save()
}

export function handleRoleGranted(event: RoleGrantedEvent): void {
  let entity = new RoleGranted(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.role = event.params.role
  entity.account = event.params.account
  entity.sender = event.params.sender
  entity.save()
}

export function handleRoleRevoked(event: RoleRevokedEvent): void {
  let entity = new RoleRevoked(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.role = event.params.role
  entity.account = event.params.account
  entity.sender = event.params.sender
  entity.save()
}

export function handleVaultCreated(event: VaultCreatedEvent): void {
  let entity = new VaultCreated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._user = event.params._user
  entity._fundOwner = event.params._fundOwner
  entity._comptrollerProxy = event.params._comptrollerProxy
  entity._vaultProxy = event.params._vaultProxy
  entity.save()
}

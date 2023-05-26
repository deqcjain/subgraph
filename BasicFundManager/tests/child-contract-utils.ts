import { newMockEvent } from "matchstick-as"
import { ethereum, Bytes, Address, BigInt } from "@graphprotocol/graph-ts"
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
} from "../generated/ChildContract/ChildContract"

export function createCodeUpdatedEvent(
  uuid: Bytes,
  codeAddress: Address
): CodeUpdated {
  let codeUpdatedEvent = changetype<CodeUpdated>(newMockEvent())

  codeUpdatedEvent.parameters = new Array()

  codeUpdatedEvent.parameters.push(
    new ethereum.EventParam("uuid", ethereum.Value.fromFixedBytes(uuid))
  )
  codeUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "codeAddress",
      ethereum.Value.fromAddress(codeAddress)
    )
  )

  return codeUpdatedEvent
}

export function createFundsAddedEvent(
  _user: Address,
  _investmentAmount: BigInt,
  _sharesReceived: BigInt
): FundsAdded {
  let fundsAddedEvent = changetype<FundsAdded>(newMockEvent())

  fundsAddedEvent.parameters = new Array()

  fundsAddedEvent.parameters.push(
    new ethereum.EventParam("_user", ethereum.Value.fromAddress(_user))
  )
  fundsAddedEvent.parameters.push(
    new ethereum.EventParam(
      "_investmentAmount",
      ethereum.Value.fromUnsignedBigInt(_investmentAmount)
    )
  )
  fundsAddedEvent.parameters.push(
    new ethereum.EventParam(
      "_sharesReceived",
      ethereum.Value.fromUnsignedBigInt(_sharesReceived)
    )
  )

  return fundsAddedEvent
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

export function createLiquidityAddedEvent(
  user: Address,
  externalPosition: Address,
  nftId: BigInt,
  liquidityAdded: BigInt
): LiquidityAdded {
  let liquidityAddedEvent = changetype<LiquidityAdded>(newMockEvent())

  liquidityAddedEvent.parameters = new Array()

  liquidityAddedEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  liquidityAddedEvent.parameters.push(
    new ethereum.EventParam(
      "externalPosition",
      ethereum.Value.fromAddress(externalPosition)
    )
  )
  liquidityAddedEvent.parameters.push(
    new ethereum.EventParam("nftId", ethereum.Value.fromUnsignedBigInt(nftId))
  )
  liquidityAddedEvent.parameters.push(
    new ethereum.EventParam(
      "liquidityAdded",
      ethereum.Value.fromUnsignedBigInt(liquidityAdded)
    )
  )

  return liquidityAddedEvent
}

export function createLiquidityWithdrawnEvent(
  user: Address,
  externalPosition: Address,
  nftId: BigInt,
  liquidityWithdrawn: BigInt
): LiquidityWithdrawn {
  let liquidityWithdrawnEvent = changetype<LiquidityWithdrawn>(newMockEvent())

  liquidityWithdrawnEvent.parameters = new Array()

  liquidityWithdrawnEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  liquidityWithdrawnEvent.parameters.push(
    new ethereum.EventParam(
      "externalPosition",
      ethereum.Value.fromAddress(externalPosition)
    )
  )
  liquidityWithdrawnEvent.parameters.push(
    new ethereum.EventParam("nftId", ethereum.Value.fromUnsignedBigInt(nftId))
  )
  liquidityWithdrawnEvent.parameters.push(
    new ethereum.EventParam(
      "liquidityWithdrawn",
      ethereum.Value.fromUnsignedBigInt(liquidityWithdrawn)
    )
  )

  return liquidityWithdrawnEvent
}

export function createRoleAdminChangedEvent(
  role: Bytes,
  previousAdminRole: Bytes,
  newAdminRole: Bytes
): RoleAdminChanged {
  let roleAdminChangedEvent = changetype<RoleAdminChanged>(newMockEvent())

  roleAdminChangedEvent.parameters = new Array()

  roleAdminChangedEvent.parameters.push(
    new ethereum.EventParam("role", ethereum.Value.fromFixedBytes(role))
  )
  roleAdminChangedEvent.parameters.push(
    new ethereum.EventParam(
      "previousAdminRole",
      ethereum.Value.fromFixedBytes(previousAdminRole)
    )
  )
  roleAdminChangedEvent.parameters.push(
    new ethereum.EventParam(
      "newAdminRole",
      ethereum.Value.fromFixedBytes(newAdminRole)
    )
  )

  return roleAdminChangedEvent
}

export function createRoleGrantedEvent(
  role: Bytes,
  account: Address,
  sender: Address
): RoleGranted {
  let roleGrantedEvent = changetype<RoleGranted>(newMockEvent())

  roleGrantedEvent.parameters = new Array()

  roleGrantedEvent.parameters.push(
    new ethereum.EventParam("role", ethereum.Value.fromFixedBytes(role))
  )
  roleGrantedEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )
  roleGrantedEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )

  return roleGrantedEvent
}

export function createRoleRevokedEvent(
  role: Bytes,
  account: Address,
  sender: Address
): RoleRevoked {
  let roleRevokedEvent = changetype<RoleRevoked>(newMockEvent())

  roleRevokedEvent.parameters = new Array()

  roleRevokedEvent.parameters.push(
    new ethereum.EventParam("role", ethereum.Value.fromFixedBytes(role))
  )
  roleRevokedEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )
  roleRevokedEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )

  return roleRevokedEvent
}

export function createVaultCreatedEvent(
  _user: Address,
  _fundOwner: Address,
  _comptrollerProxy: Address,
  _vaultProxy: Address
): VaultCreated {
  let vaultCreatedEvent = changetype<VaultCreated>(newMockEvent())

  vaultCreatedEvent.parameters = new Array()

  vaultCreatedEvent.parameters.push(
    new ethereum.EventParam("_user", ethereum.Value.fromAddress(_user))
  )
  vaultCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "_fundOwner",
      ethereum.Value.fromAddress(_fundOwner)
    )
  )
  vaultCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "_comptrollerProxy",
      ethereum.Value.fromAddress(_comptrollerProxy)
    )
  )
  vaultCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "_vaultProxy",
      ethereum.Value.fromAddress(_vaultProxy)
    )
  )

  return vaultCreatedEvent
}

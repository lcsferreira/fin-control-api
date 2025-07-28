
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Family
 * 
 */
export type Family = $Result.DefaultSelection<Prisma.$FamilyPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Card
 * 
 */
export type Card = $Result.DefaultSelection<Prisma.$CardPayload>
/**
 * Model Expense
 * 
 */
export type Expense = $Result.DefaultSelection<Prisma.$ExpensePayload>
/**
 * Model Income
 * 
 */
export type Income = $Result.DefaultSelection<Prisma.$IncomePayload>
/**
 * Model Savings
 * 
 */
export type Savings = $Result.DefaultSelection<Prisma.$SavingsPayload>
/**
 * Model SavingsEntry
 * 
 */
export type SavingsEntry = $Result.DefaultSelection<Prisma.$SavingsEntryPayload>
/**
 * Model SavingsWithdrawal
 * 
 */
export type SavingsWithdrawal = $Result.DefaultSelection<Prisma.$SavingsWithdrawalPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const ExpenseType: {
  FIXED: 'FIXED',
  VARIABLE: 'VARIABLE',
  ONE_TIME: 'ONE_TIME'
};

export type ExpenseType = (typeof ExpenseType)[keyof typeof ExpenseType]


export const PaymentMethod: {
  CREDIT_CARD: 'CREDIT_CARD',
  DEBIT_CARD: 'DEBIT_CARD',
  PIX: 'PIX',
  BANK_TRANSFER: 'BANK_TRANSFER',
  CASH: 'CASH',
  OTHER: 'OTHER'
};

export type PaymentMethod = (typeof PaymentMethod)[keyof typeof PaymentMethod]


export const ExpenseCategory: {
  FOOD: 'FOOD',
  SUBSCRIPTION: 'SUBSCRIPTION',
  BILL: 'BILL',
  LOAN: 'LOAN',
  LEISURE: 'LEISURE',
  HEALTH: 'HEALTH',
  GIFT: 'GIFT',
  TRANSPORT: 'TRANSPORT',
  HOME: 'HOME',
  CLOTHES: 'CLOTHES',
  OTHER_PERSONS: 'OTHER_PERSONS',
  OTHER: 'OTHER'
};

export type ExpenseCategory = (typeof ExpenseCategory)[keyof typeof ExpenseCategory]


export const IncomeCategory: {
  SALARY: 'SALARY',
  PIX: 'PIX'
};

export type IncomeCategory = (typeof IncomeCategory)[keyof typeof IncomeCategory]

}

export type ExpenseType = $Enums.ExpenseType

export const ExpenseType: typeof $Enums.ExpenseType

export type PaymentMethod = $Enums.PaymentMethod

export const PaymentMethod: typeof $Enums.PaymentMethod

export type ExpenseCategory = $Enums.ExpenseCategory

export const ExpenseCategory: typeof $Enums.ExpenseCategory

export type IncomeCategory = $Enums.IncomeCategory

export const IncomeCategory: typeof $Enums.IncomeCategory

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Families
 * const families = await prisma.family.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Families
   * const families = await prisma.family.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.family`: Exposes CRUD operations for the **Family** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Families
    * const families = await prisma.family.findMany()
    * ```
    */
  get family(): Prisma.FamilyDelegate<ExtArgs>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.card`: Exposes CRUD operations for the **Card** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cards
    * const cards = await prisma.card.findMany()
    * ```
    */
  get card(): Prisma.CardDelegate<ExtArgs>;

  /**
   * `prisma.expense`: Exposes CRUD operations for the **Expense** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Expenses
    * const expenses = await prisma.expense.findMany()
    * ```
    */
  get expense(): Prisma.ExpenseDelegate<ExtArgs>;

  /**
   * `prisma.income`: Exposes CRUD operations for the **Income** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Incomes
    * const incomes = await prisma.income.findMany()
    * ```
    */
  get income(): Prisma.IncomeDelegate<ExtArgs>;

  /**
   * `prisma.savings`: Exposes CRUD operations for the **Savings** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Savings
    * const savings = await prisma.savings.findMany()
    * ```
    */
  get savings(): Prisma.SavingsDelegate<ExtArgs>;

  /**
   * `prisma.savingsEntry`: Exposes CRUD operations for the **SavingsEntry** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SavingsEntries
    * const savingsEntries = await prisma.savingsEntry.findMany()
    * ```
    */
  get savingsEntry(): Prisma.SavingsEntryDelegate<ExtArgs>;

  /**
   * `prisma.savingsWithdrawal`: Exposes CRUD operations for the **SavingsWithdrawal** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SavingsWithdrawals
    * const savingsWithdrawals = await prisma.savingsWithdrawal.findMany()
    * ```
    */
  get savingsWithdrawal(): Prisma.SavingsWithdrawalDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Family: 'Family',
    User: 'User',
    Card: 'Card',
    Expense: 'Expense',
    Income: 'Income',
    Savings: 'Savings',
    SavingsEntry: 'SavingsEntry',
    SavingsWithdrawal: 'SavingsWithdrawal'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "family" | "user" | "card" | "expense" | "income" | "savings" | "savingsEntry" | "savingsWithdrawal"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Family: {
        payload: Prisma.$FamilyPayload<ExtArgs>
        fields: Prisma.FamilyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FamilyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FamilyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FamilyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FamilyPayload>
          }
          findFirst: {
            args: Prisma.FamilyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FamilyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FamilyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FamilyPayload>
          }
          findMany: {
            args: Prisma.FamilyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FamilyPayload>[]
          }
          create: {
            args: Prisma.FamilyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FamilyPayload>
          }
          createMany: {
            args: Prisma.FamilyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FamilyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FamilyPayload>[]
          }
          delete: {
            args: Prisma.FamilyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FamilyPayload>
          }
          update: {
            args: Prisma.FamilyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FamilyPayload>
          }
          deleteMany: {
            args: Prisma.FamilyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FamilyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.FamilyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FamilyPayload>
          }
          aggregate: {
            args: Prisma.FamilyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFamily>
          }
          groupBy: {
            args: Prisma.FamilyGroupByArgs<ExtArgs>
            result: $Utils.Optional<FamilyGroupByOutputType>[]
          }
          count: {
            args: Prisma.FamilyCountArgs<ExtArgs>
            result: $Utils.Optional<FamilyCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Card: {
        payload: Prisma.$CardPayload<ExtArgs>
        fields: Prisma.CardFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CardFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CardFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardPayload>
          }
          findFirst: {
            args: Prisma.CardFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CardFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardPayload>
          }
          findMany: {
            args: Prisma.CardFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardPayload>[]
          }
          create: {
            args: Prisma.CardCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardPayload>
          }
          createMany: {
            args: Prisma.CardCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CardCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardPayload>[]
          }
          delete: {
            args: Prisma.CardDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardPayload>
          }
          update: {
            args: Prisma.CardUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardPayload>
          }
          deleteMany: {
            args: Prisma.CardDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CardUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CardUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardPayload>
          }
          aggregate: {
            args: Prisma.CardAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCard>
          }
          groupBy: {
            args: Prisma.CardGroupByArgs<ExtArgs>
            result: $Utils.Optional<CardGroupByOutputType>[]
          }
          count: {
            args: Prisma.CardCountArgs<ExtArgs>
            result: $Utils.Optional<CardCountAggregateOutputType> | number
          }
        }
      }
      Expense: {
        payload: Prisma.$ExpensePayload<ExtArgs>
        fields: Prisma.ExpenseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ExpenseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ExpenseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensePayload>
          }
          findFirst: {
            args: Prisma.ExpenseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ExpenseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensePayload>
          }
          findMany: {
            args: Prisma.ExpenseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensePayload>[]
          }
          create: {
            args: Prisma.ExpenseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensePayload>
          }
          createMany: {
            args: Prisma.ExpenseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ExpenseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensePayload>[]
          }
          delete: {
            args: Prisma.ExpenseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensePayload>
          }
          update: {
            args: Prisma.ExpenseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensePayload>
          }
          deleteMany: {
            args: Prisma.ExpenseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ExpenseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ExpenseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensePayload>
          }
          aggregate: {
            args: Prisma.ExpenseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExpense>
          }
          groupBy: {
            args: Prisma.ExpenseGroupByArgs<ExtArgs>
            result: $Utils.Optional<ExpenseGroupByOutputType>[]
          }
          count: {
            args: Prisma.ExpenseCountArgs<ExtArgs>
            result: $Utils.Optional<ExpenseCountAggregateOutputType> | number
          }
        }
      }
      Income: {
        payload: Prisma.$IncomePayload<ExtArgs>
        fields: Prisma.IncomeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.IncomeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncomePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.IncomeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncomePayload>
          }
          findFirst: {
            args: Prisma.IncomeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncomePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.IncomeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncomePayload>
          }
          findMany: {
            args: Prisma.IncomeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncomePayload>[]
          }
          create: {
            args: Prisma.IncomeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncomePayload>
          }
          createMany: {
            args: Prisma.IncomeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.IncomeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncomePayload>[]
          }
          delete: {
            args: Prisma.IncomeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncomePayload>
          }
          update: {
            args: Prisma.IncomeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncomePayload>
          }
          deleteMany: {
            args: Prisma.IncomeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.IncomeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.IncomeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncomePayload>
          }
          aggregate: {
            args: Prisma.IncomeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateIncome>
          }
          groupBy: {
            args: Prisma.IncomeGroupByArgs<ExtArgs>
            result: $Utils.Optional<IncomeGroupByOutputType>[]
          }
          count: {
            args: Prisma.IncomeCountArgs<ExtArgs>
            result: $Utils.Optional<IncomeCountAggregateOutputType> | number
          }
        }
      }
      Savings: {
        payload: Prisma.$SavingsPayload<ExtArgs>
        fields: Prisma.SavingsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SavingsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavingsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SavingsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavingsPayload>
          }
          findFirst: {
            args: Prisma.SavingsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavingsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SavingsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavingsPayload>
          }
          findMany: {
            args: Prisma.SavingsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavingsPayload>[]
          }
          create: {
            args: Prisma.SavingsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavingsPayload>
          }
          createMany: {
            args: Prisma.SavingsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SavingsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavingsPayload>[]
          }
          delete: {
            args: Prisma.SavingsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavingsPayload>
          }
          update: {
            args: Prisma.SavingsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavingsPayload>
          }
          deleteMany: {
            args: Prisma.SavingsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SavingsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SavingsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavingsPayload>
          }
          aggregate: {
            args: Prisma.SavingsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSavings>
          }
          groupBy: {
            args: Prisma.SavingsGroupByArgs<ExtArgs>
            result: $Utils.Optional<SavingsGroupByOutputType>[]
          }
          count: {
            args: Prisma.SavingsCountArgs<ExtArgs>
            result: $Utils.Optional<SavingsCountAggregateOutputType> | number
          }
        }
      }
      SavingsEntry: {
        payload: Prisma.$SavingsEntryPayload<ExtArgs>
        fields: Prisma.SavingsEntryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SavingsEntryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavingsEntryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SavingsEntryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavingsEntryPayload>
          }
          findFirst: {
            args: Prisma.SavingsEntryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavingsEntryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SavingsEntryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavingsEntryPayload>
          }
          findMany: {
            args: Prisma.SavingsEntryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavingsEntryPayload>[]
          }
          create: {
            args: Prisma.SavingsEntryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavingsEntryPayload>
          }
          createMany: {
            args: Prisma.SavingsEntryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SavingsEntryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavingsEntryPayload>[]
          }
          delete: {
            args: Prisma.SavingsEntryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavingsEntryPayload>
          }
          update: {
            args: Prisma.SavingsEntryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavingsEntryPayload>
          }
          deleteMany: {
            args: Prisma.SavingsEntryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SavingsEntryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SavingsEntryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavingsEntryPayload>
          }
          aggregate: {
            args: Prisma.SavingsEntryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSavingsEntry>
          }
          groupBy: {
            args: Prisma.SavingsEntryGroupByArgs<ExtArgs>
            result: $Utils.Optional<SavingsEntryGroupByOutputType>[]
          }
          count: {
            args: Prisma.SavingsEntryCountArgs<ExtArgs>
            result: $Utils.Optional<SavingsEntryCountAggregateOutputType> | number
          }
        }
      }
      SavingsWithdrawal: {
        payload: Prisma.$SavingsWithdrawalPayload<ExtArgs>
        fields: Prisma.SavingsWithdrawalFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SavingsWithdrawalFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavingsWithdrawalPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SavingsWithdrawalFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavingsWithdrawalPayload>
          }
          findFirst: {
            args: Prisma.SavingsWithdrawalFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavingsWithdrawalPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SavingsWithdrawalFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavingsWithdrawalPayload>
          }
          findMany: {
            args: Prisma.SavingsWithdrawalFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavingsWithdrawalPayload>[]
          }
          create: {
            args: Prisma.SavingsWithdrawalCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavingsWithdrawalPayload>
          }
          createMany: {
            args: Prisma.SavingsWithdrawalCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SavingsWithdrawalCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavingsWithdrawalPayload>[]
          }
          delete: {
            args: Prisma.SavingsWithdrawalDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavingsWithdrawalPayload>
          }
          update: {
            args: Prisma.SavingsWithdrawalUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavingsWithdrawalPayload>
          }
          deleteMany: {
            args: Prisma.SavingsWithdrawalDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SavingsWithdrawalUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SavingsWithdrawalUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavingsWithdrawalPayload>
          }
          aggregate: {
            args: Prisma.SavingsWithdrawalAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSavingsWithdrawal>
          }
          groupBy: {
            args: Prisma.SavingsWithdrawalGroupByArgs<ExtArgs>
            result: $Utils.Optional<SavingsWithdrawalGroupByOutputType>[]
          }
          count: {
            args: Prisma.SavingsWithdrawalCountArgs<ExtArgs>
            result: $Utils.Optional<SavingsWithdrawalCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type FamilyCountOutputType
   */

  export type FamilyCountOutputType = {
    users: number
  }

  export type FamilyCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | FamilyCountOutputTypeCountUsersArgs
  }

  // Custom InputTypes
  /**
   * FamilyCountOutputType without action
   */
  export type FamilyCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FamilyCountOutputType
     */
    select?: FamilyCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FamilyCountOutputType without action
   */
  export type FamilyCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    expenses: number
    cards: number
    incomes: number
    savings: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    expenses?: boolean | UserCountOutputTypeCountExpensesArgs
    cards?: boolean | UserCountOutputTypeCountCardsArgs
    incomes?: boolean | UserCountOutputTypeCountIncomesArgs
    savings?: boolean | UserCountOutputTypeCountSavingsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountExpensesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExpenseWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCardsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CardWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountIncomesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IncomeWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSavingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SavingsWhereInput
  }


  /**
   * Count Type SavingsCountOutputType
   */

  export type SavingsCountOutputType = {
    entries: number
    withdrawals: number
  }

  export type SavingsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    entries?: boolean | SavingsCountOutputTypeCountEntriesArgs
    withdrawals?: boolean | SavingsCountOutputTypeCountWithdrawalsArgs
  }

  // Custom InputTypes
  /**
   * SavingsCountOutputType without action
   */
  export type SavingsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavingsCountOutputType
     */
    select?: SavingsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SavingsCountOutputType without action
   */
  export type SavingsCountOutputTypeCountEntriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SavingsEntryWhereInput
  }

  /**
   * SavingsCountOutputType without action
   */
  export type SavingsCountOutputTypeCountWithdrawalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SavingsWithdrawalWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Family
   */

  export type AggregateFamily = {
    _count: FamilyCountAggregateOutputType | null
    _min: FamilyMinAggregateOutputType | null
    _max: FamilyMaxAggregateOutputType | null
  }

  export type FamilyMinAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type FamilyMaxAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type FamilyCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type FamilyMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type FamilyMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type FamilyCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type FamilyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Family to aggregate.
     */
    where?: FamilyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Families to fetch.
     */
    orderBy?: FamilyOrderByWithRelationInput | FamilyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FamilyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Families from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Families.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Families
    **/
    _count?: true | FamilyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FamilyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FamilyMaxAggregateInputType
  }

  export type GetFamilyAggregateType<T extends FamilyAggregateArgs> = {
        [P in keyof T & keyof AggregateFamily]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFamily[P]>
      : GetScalarType<T[P], AggregateFamily[P]>
  }




  export type FamilyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FamilyWhereInput
    orderBy?: FamilyOrderByWithAggregationInput | FamilyOrderByWithAggregationInput[]
    by: FamilyScalarFieldEnum[] | FamilyScalarFieldEnum
    having?: FamilyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FamilyCountAggregateInputType | true
    _min?: FamilyMinAggregateInputType
    _max?: FamilyMaxAggregateInputType
  }

  export type FamilyGroupByOutputType = {
    id: string
    name: string
    _count: FamilyCountAggregateOutputType | null
    _min: FamilyMinAggregateOutputType | null
    _max: FamilyMaxAggregateOutputType | null
  }

  type GetFamilyGroupByPayload<T extends FamilyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FamilyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FamilyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FamilyGroupByOutputType[P]>
            : GetScalarType<T[P], FamilyGroupByOutputType[P]>
        }
      >
    >


  export type FamilySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    users?: boolean | Family$usersArgs<ExtArgs>
    _count?: boolean | FamilyCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["family"]>

  export type FamilySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["family"]>

  export type FamilySelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type FamilyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | Family$usersArgs<ExtArgs>
    _count?: boolean | FamilyCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type FamilyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $FamilyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Family"
    objects: {
      users: Prisma.$UserPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
    }, ExtArgs["result"]["family"]>
    composites: {}
  }

  type FamilyGetPayload<S extends boolean | null | undefined | FamilyDefaultArgs> = $Result.GetResult<Prisma.$FamilyPayload, S>

  type FamilyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<FamilyFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: FamilyCountAggregateInputType | true
    }

  export interface FamilyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Family'], meta: { name: 'Family' } }
    /**
     * Find zero or one Family that matches the filter.
     * @param {FamilyFindUniqueArgs} args - Arguments to find a Family
     * @example
     * // Get one Family
     * const family = await prisma.family.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FamilyFindUniqueArgs>(args: SelectSubset<T, FamilyFindUniqueArgs<ExtArgs>>): Prisma__FamilyClient<$Result.GetResult<Prisma.$FamilyPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Family that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {FamilyFindUniqueOrThrowArgs} args - Arguments to find a Family
     * @example
     * // Get one Family
     * const family = await prisma.family.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FamilyFindUniqueOrThrowArgs>(args: SelectSubset<T, FamilyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FamilyClient<$Result.GetResult<Prisma.$FamilyPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Family that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FamilyFindFirstArgs} args - Arguments to find a Family
     * @example
     * // Get one Family
     * const family = await prisma.family.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FamilyFindFirstArgs>(args?: SelectSubset<T, FamilyFindFirstArgs<ExtArgs>>): Prisma__FamilyClient<$Result.GetResult<Prisma.$FamilyPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Family that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FamilyFindFirstOrThrowArgs} args - Arguments to find a Family
     * @example
     * // Get one Family
     * const family = await prisma.family.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FamilyFindFirstOrThrowArgs>(args?: SelectSubset<T, FamilyFindFirstOrThrowArgs<ExtArgs>>): Prisma__FamilyClient<$Result.GetResult<Prisma.$FamilyPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Families that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FamilyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Families
     * const families = await prisma.family.findMany()
     * 
     * // Get first 10 Families
     * const families = await prisma.family.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const familyWithIdOnly = await prisma.family.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FamilyFindManyArgs>(args?: SelectSubset<T, FamilyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FamilyPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Family.
     * @param {FamilyCreateArgs} args - Arguments to create a Family.
     * @example
     * // Create one Family
     * const Family = await prisma.family.create({
     *   data: {
     *     // ... data to create a Family
     *   }
     * })
     * 
     */
    create<T extends FamilyCreateArgs>(args: SelectSubset<T, FamilyCreateArgs<ExtArgs>>): Prisma__FamilyClient<$Result.GetResult<Prisma.$FamilyPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Families.
     * @param {FamilyCreateManyArgs} args - Arguments to create many Families.
     * @example
     * // Create many Families
     * const family = await prisma.family.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FamilyCreateManyArgs>(args?: SelectSubset<T, FamilyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Families and returns the data saved in the database.
     * @param {FamilyCreateManyAndReturnArgs} args - Arguments to create many Families.
     * @example
     * // Create many Families
     * const family = await prisma.family.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Families and only return the `id`
     * const familyWithIdOnly = await prisma.family.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FamilyCreateManyAndReturnArgs>(args?: SelectSubset<T, FamilyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FamilyPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Family.
     * @param {FamilyDeleteArgs} args - Arguments to delete one Family.
     * @example
     * // Delete one Family
     * const Family = await prisma.family.delete({
     *   where: {
     *     // ... filter to delete one Family
     *   }
     * })
     * 
     */
    delete<T extends FamilyDeleteArgs>(args: SelectSubset<T, FamilyDeleteArgs<ExtArgs>>): Prisma__FamilyClient<$Result.GetResult<Prisma.$FamilyPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Family.
     * @param {FamilyUpdateArgs} args - Arguments to update one Family.
     * @example
     * // Update one Family
     * const family = await prisma.family.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FamilyUpdateArgs>(args: SelectSubset<T, FamilyUpdateArgs<ExtArgs>>): Prisma__FamilyClient<$Result.GetResult<Prisma.$FamilyPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Families.
     * @param {FamilyDeleteManyArgs} args - Arguments to filter Families to delete.
     * @example
     * // Delete a few Families
     * const { count } = await prisma.family.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FamilyDeleteManyArgs>(args?: SelectSubset<T, FamilyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Families.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FamilyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Families
     * const family = await prisma.family.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FamilyUpdateManyArgs>(args: SelectSubset<T, FamilyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Family.
     * @param {FamilyUpsertArgs} args - Arguments to update or create a Family.
     * @example
     * // Update or create a Family
     * const family = await prisma.family.upsert({
     *   create: {
     *     // ... data to create a Family
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Family we want to update
     *   }
     * })
     */
    upsert<T extends FamilyUpsertArgs>(args: SelectSubset<T, FamilyUpsertArgs<ExtArgs>>): Prisma__FamilyClient<$Result.GetResult<Prisma.$FamilyPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Families.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FamilyCountArgs} args - Arguments to filter Families to count.
     * @example
     * // Count the number of Families
     * const count = await prisma.family.count({
     *   where: {
     *     // ... the filter for the Families we want to count
     *   }
     * })
    **/
    count<T extends FamilyCountArgs>(
      args?: Subset<T, FamilyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FamilyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Family.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FamilyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FamilyAggregateArgs>(args: Subset<T, FamilyAggregateArgs>): Prisma.PrismaPromise<GetFamilyAggregateType<T>>

    /**
     * Group by Family.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FamilyGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FamilyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FamilyGroupByArgs['orderBy'] }
        : { orderBy?: FamilyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FamilyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFamilyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Family model
   */
  readonly fields: FamilyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Family.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FamilyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends Family$usersArgs<ExtArgs> = {}>(args?: Subset<T, Family$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Family model
   */ 
  interface FamilyFieldRefs {
    readonly id: FieldRef<"Family", 'String'>
    readonly name: FieldRef<"Family", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Family findUnique
   */
  export type FamilyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Family
     */
    select?: FamilySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FamilyInclude<ExtArgs> | null
    /**
     * Filter, which Family to fetch.
     */
    where: FamilyWhereUniqueInput
  }

  /**
   * Family findUniqueOrThrow
   */
  export type FamilyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Family
     */
    select?: FamilySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FamilyInclude<ExtArgs> | null
    /**
     * Filter, which Family to fetch.
     */
    where: FamilyWhereUniqueInput
  }

  /**
   * Family findFirst
   */
  export type FamilyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Family
     */
    select?: FamilySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FamilyInclude<ExtArgs> | null
    /**
     * Filter, which Family to fetch.
     */
    where?: FamilyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Families to fetch.
     */
    orderBy?: FamilyOrderByWithRelationInput | FamilyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Families.
     */
    cursor?: FamilyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Families from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Families.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Families.
     */
    distinct?: FamilyScalarFieldEnum | FamilyScalarFieldEnum[]
  }

  /**
   * Family findFirstOrThrow
   */
  export type FamilyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Family
     */
    select?: FamilySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FamilyInclude<ExtArgs> | null
    /**
     * Filter, which Family to fetch.
     */
    where?: FamilyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Families to fetch.
     */
    orderBy?: FamilyOrderByWithRelationInput | FamilyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Families.
     */
    cursor?: FamilyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Families from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Families.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Families.
     */
    distinct?: FamilyScalarFieldEnum | FamilyScalarFieldEnum[]
  }

  /**
   * Family findMany
   */
  export type FamilyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Family
     */
    select?: FamilySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FamilyInclude<ExtArgs> | null
    /**
     * Filter, which Families to fetch.
     */
    where?: FamilyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Families to fetch.
     */
    orderBy?: FamilyOrderByWithRelationInput | FamilyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Families.
     */
    cursor?: FamilyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Families from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Families.
     */
    skip?: number
    distinct?: FamilyScalarFieldEnum | FamilyScalarFieldEnum[]
  }

  /**
   * Family create
   */
  export type FamilyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Family
     */
    select?: FamilySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FamilyInclude<ExtArgs> | null
    /**
     * The data needed to create a Family.
     */
    data: XOR<FamilyCreateInput, FamilyUncheckedCreateInput>
  }

  /**
   * Family createMany
   */
  export type FamilyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Families.
     */
    data: FamilyCreateManyInput | FamilyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Family createManyAndReturn
   */
  export type FamilyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Family
     */
    select?: FamilySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Families.
     */
    data: FamilyCreateManyInput | FamilyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Family update
   */
  export type FamilyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Family
     */
    select?: FamilySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FamilyInclude<ExtArgs> | null
    /**
     * The data needed to update a Family.
     */
    data: XOR<FamilyUpdateInput, FamilyUncheckedUpdateInput>
    /**
     * Choose, which Family to update.
     */
    where: FamilyWhereUniqueInput
  }

  /**
   * Family updateMany
   */
  export type FamilyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Families.
     */
    data: XOR<FamilyUpdateManyMutationInput, FamilyUncheckedUpdateManyInput>
    /**
     * Filter which Families to update
     */
    where?: FamilyWhereInput
  }

  /**
   * Family upsert
   */
  export type FamilyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Family
     */
    select?: FamilySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FamilyInclude<ExtArgs> | null
    /**
     * The filter to search for the Family to update in case it exists.
     */
    where: FamilyWhereUniqueInput
    /**
     * In case the Family found by the `where` argument doesn't exist, create a new Family with this data.
     */
    create: XOR<FamilyCreateInput, FamilyUncheckedCreateInput>
    /**
     * In case the Family was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FamilyUpdateInput, FamilyUncheckedUpdateInput>
  }

  /**
   * Family delete
   */
  export type FamilyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Family
     */
    select?: FamilySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FamilyInclude<ExtArgs> | null
    /**
     * Filter which Family to delete.
     */
    where: FamilyWhereUniqueInput
  }

  /**
   * Family deleteMany
   */
  export type FamilyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Families to delete
     */
    where?: FamilyWhereInput
  }

  /**
   * Family.users
   */
  export type Family$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Family without action
   */
  export type FamilyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Family
     */
    select?: FamilySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FamilyInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    totalMoney: number | null
  }

  export type UserSumAggregateOutputType = {
    totalMoney: number | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    totalMoney: number | null
    familyId: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    totalMoney: number | null
    familyId: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    totalMoney: number
    familyId: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    totalMoney?: true
  }

  export type UserSumAggregateInputType = {
    totalMoney?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    totalMoney?: true
    familyId?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    totalMoney?: true
    familyId?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    totalMoney?: true
    familyId?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string
    totalMoney: number
    familyId: string | null
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    totalMoney?: boolean
    familyId?: boolean
    expenses?: boolean | User$expensesArgs<ExtArgs>
    cards?: boolean | User$cardsArgs<ExtArgs>
    incomes?: boolean | User$incomesArgs<ExtArgs>
    savings?: boolean | User$savingsArgs<ExtArgs>
    family?: boolean | User$familyArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    totalMoney?: boolean
    familyId?: boolean
    family?: boolean | User$familyArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    totalMoney?: boolean
    familyId?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    expenses?: boolean | User$expensesArgs<ExtArgs>
    cards?: boolean | User$cardsArgs<ExtArgs>
    incomes?: boolean | User$incomesArgs<ExtArgs>
    savings?: boolean | User$savingsArgs<ExtArgs>
    family?: boolean | User$familyArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    family?: boolean | User$familyArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      expenses: Prisma.$ExpensePayload<ExtArgs>[]
      cards: Prisma.$CardPayload<ExtArgs>[]
      incomes: Prisma.$IncomePayload<ExtArgs>[]
      savings: Prisma.$SavingsPayload<ExtArgs>[]
      family: Prisma.$FamilyPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      totalMoney: number
      familyId: string | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    expenses<T extends User$expensesArgs<ExtArgs> = {}>(args?: Subset<T, User$expensesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "findMany"> | Null>
    cards<T extends User$cardsArgs<ExtArgs> = {}>(args?: Subset<T, User$cardsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CardPayload<ExtArgs>, T, "findMany"> | Null>
    incomes<T extends User$incomesArgs<ExtArgs> = {}>(args?: Subset<T, User$incomesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IncomePayload<ExtArgs>, T, "findMany"> | Null>
    savings<T extends User$savingsArgs<ExtArgs> = {}>(args?: Subset<T, User$savingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SavingsPayload<ExtArgs>, T, "findMany"> | Null>
    family<T extends User$familyArgs<ExtArgs> = {}>(args?: Subset<T, User$familyArgs<ExtArgs>>): Prisma__FamilyClient<$Result.GetResult<Prisma.$FamilyPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly totalMoney: FieldRef<"User", 'Float'>
    readonly familyId: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }

  /**
   * User.expenses
   */
  export type User$expensesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseInclude<ExtArgs> | null
    where?: ExpenseWhereInput
    orderBy?: ExpenseOrderByWithRelationInput | ExpenseOrderByWithRelationInput[]
    cursor?: ExpenseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExpenseScalarFieldEnum | ExpenseScalarFieldEnum[]
  }

  /**
   * User.cards
   */
  export type User$cardsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Card
     */
    select?: CardSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardInclude<ExtArgs> | null
    where?: CardWhereInput
    orderBy?: CardOrderByWithRelationInput | CardOrderByWithRelationInput[]
    cursor?: CardWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CardScalarFieldEnum | CardScalarFieldEnum[]
  }

  /**
   * User.incomes
   */
  export type User$incomesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Income
     */
    select?: IncomeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncomeInclude<ExtArgs> | null
    where?: IncomeWhereInput
    orderBy?: IncomeOrderByWithRelationInput | IncomeOrderByWithRelationInput[]
    cursor?: IncomeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: IncomeScalarFieldEnum | IncomeScalarFieldEnum[]
  }

  /**
   * User.savings
   */
  export type User$savingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Savings
     */
    select?: SavingsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavingsInclude<ExtArgs> | null
    where?: SavingsWhereInput
    orderBy?: SavingsOrderByWithRelationInput | SavingsOrderByWithRelationInput[]
    cursor?: SavingsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SavingsScalarFieldEnum | SavingsScalarFieldEnum[]
  }

  /**
   * User.family
   */
  export type User$familyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Family
     */
    select?: FamilySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FamilyInclude<ExtArgs> | null
    where?: FamilyWhereInput
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Card
   */

  export type AggregateCard = {
    _count: CardCountAggregateOutputType | null
    _avg: CardAvgAggregateOutputType | null
    _sum: CardSumAggregateOutputType | null
    _min: CardMinAggregateOutputType | null
    _max: CardMaxAggregateOutputType | null
  }

  export type CardAvgAggregateOutputType = {
    invoiceClosingDay: number | null
    invoiceAmount: number | null
    creditLimit: number | null
    dueDate: number | null
  }

  export type CardSumAggregateOutputType = {
    invoiceClosingDay: number | null
    invoiceAmount: number | null
    creditLimit: number | null
    dueDate: number | null
  }

  export type CardMinAggregateOutputType = {
    id: string | null
    name: string | null
    lastFourNumbers: string | null
    invoiceClosingDay: number | null
    invoiceAmount: number | null
    creditLimit: number | null
    dueDate: number | null
    userId: string | null
  }

  export type CardMaxAggregateOutputType = {
    id: string | null
    name: string | null
    lastFourNumbers: string | null
    invoiceClosingDay: number | null
    invoiceAmount: number | null
    creditLimit: number | null
    dueDate: number | null
    userId: string | null
  }

  export type CardCountAggregateOutputType = {
    id: number
    name: number
    lastFourNumbers: number
    invoiceClosingDay: number
    invoiceAmount: number
    creditLimit: number
    dueDate: number
    userId: number
    _all: number
  }


  export type CardAvgAggregateInputType = {
    invoiceClosingDay?: true
    invoiceAmount?: true
    creditLimit?: true
    dueDate?: true
  }

  export type CardSumAggregateInputType = {
    invoiceClosingDay?: true
    invoiceAmount?: true
    creditLimit?: true
    dueDate?: true
  }

  export type CardMinAggregateInputType = {
    id?: true
    name?: true
    lastFourNumbers?: true
    invoiceClosingDay?: true
    invoiceAmount?: true
    creditLimit?: true
    dueDate?: true
    userId?: true
  }

  export type CardMaxAggregateInputType = {
    id?: true
    name?: true
    lastFourNumbers?: true
    invoiceClosingDay?: true
    invoiceAmount?: true
    creditLimit?: true
    dueDate?: true
    userId?: true
  }

  export type CardCountAggregateInputType = {
    id?: true
    name?: true
    lastFourNumbers?: true
    invoiceClosingDay?: true
    invoiceAmount?: true
    creditLimit?: true
    dueDate?: true
    userId?: true
    _all?: true
  }

  export type CardAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Card to aggregate.
     */
    where?: CardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cards to fetch.
     */
    orderBy?: CardOrderByWithRelationInput | CardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Cards
    **/
    _count?: true | CardCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CardAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CardSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CardMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CardMaxAggregateInputType
  }

  export type GetCardAggregateType<T extends CardAggregateArgs> = {
        [P in keyof T & keyof AggregateCard]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCard[P]>
      : GetScalarType<T[P], AggregateCard[P]>
  }




  export type CardGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CardWhereInput
    orderBy?: CardOrderByWithAggregationInput | CardOrderByWithAggregationInput[]
    by: CardScalarFieldEnum[] | CardScalarFieldEnum
    having?: CardScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CardCountAggregateInputType | true
    _avg?: CardAvgAggregateInputType
    _sum?: CardSumAggregateInputType
    _min?: CardMinAggregateInputType
    _max?: CardMaxAggregateInputType
  }

  export type CardGroupByOutputType = {
    id: string
    name: string
    lastFourNumbers: string
    invoiceClosingDay: number
    invoiceAmount: number
    creditLimit: number
    dueDate: number
    userId: string
    _count: CardCountAggregateOutputType | null
    _avg: CardAvgAggregateOutputType | null
    _sum: CardSumAggregateOutputType | null
    _min: CardMinAggregateOutputType | null
    _max: CardMaxAggregateOutputType | null
  }

  type GetCardGroupByPayload<T extends CardGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CardGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CardGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CardGroupByOutputType[P]>
            : GetScalarType<T[P], CardGroupByOutputType[P]>
        }
      >
    >


  export type CardSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    lastFourNumbers?: boolean
    invoiceClosingDay?: boolean
    invoiceAmount?: boolean
    creditLimit?: boolean
    dueDate?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["card"]>

  export type CardSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    lastFourNumbers?: boolean
    invoiceClosingDay?: boolean
    invoiceAmount?: boolean
    creditLimit?: boolean
    dueDate?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["card"]>

  export type CardSelectScalar = {
    id?: boolean
    name?: boolean
    lastFourNumbers?: boolean
    invoiceClosingDay?: boolean
    invoiceAmount?: boolean
    creditLimit?: boolean
    dueDate?: boolean
    userId?: boolean
  }

  export type CardInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type CardIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $CardPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Card"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      lastFourNumbers: string
      invoiceClosingDay: number
      invoiceAmount: number
      creditLimit: number
      dueDate: number
      userId: string
    }, ExtArgs["result"]["card"]>
    composites: {}
  }

  type CardGetPayload<S extends boolean | null | undefined | CardDefaultArgs> = $Result.GetResult<Prisma.$CardPayload, S>

  type CardCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CardFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CardCountAggregateInputType | true
    }

  export interface CardDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Card'], meta: { name: 'Card' } }
    /**
     * Find zero or one Card that matches the filter.
     * @param {CardFindUniqueArgs} args - Arguments to find a Card
     * @example
     * // Get one Card
     * const card = await prisma.card.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CardFindUniqueArgs>(args: SelectSubset<T, CardFindUniqueArgs<ExtArgs>>): Prisma__CardClient<$Result.GetResult<Prisma.$CardPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Card that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {CardFindUniqueOrThrowArgs} args - Arguments to find a Card
     * @example
     * // Get one Card
     * const card = await prisma.card.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CardFindUniqueOrThrowArgs>(args: SelectSubset<T, CardFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CardClient<$Result.GetResult<Prisma.$CardPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Card that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardFindFirstArgs} args - Arguments to find a Card
     * @example
     * // Get one Card
     * const card = await prisma.card.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CardFindFirstArgs>(args?: SelectSubset<T, CardFindFirstArgs<ExtArgs>>): Prisma__CardClient<$Result.GetResult<Prisma.$CardPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Card that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardFindFirstOrThrowArgs} args - Arguments to find a Card
     * @example
     * // Get one Card
     * const card = await prisma.card.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CardFindFirstOrThrowArgs>(args?: SelectSubset<T, CardFindFirstOrThrowArgs<ExtArgs>>): Prisma__CardClient<$Result.GetResult<Prisma.$CardPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Cards that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cards
     * const cards = await prisma.card.findMany()
     * 
     * // Get first 10 Cards
     * const cards = await prisma.card.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cardWithIdOnly = await prisma.card.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CardFindManyArgs>(args?: SelectSubset<T, CardFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CardPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Card.
     * @param {CardCreateArgs} args - Arguments to create a Card.
     * @example
     * // Create one Card
     * const Card = await prisma.card.create({
     *   data: {
     *     // ... data to create a Card
     *   }
     * })
     * 
     */
    create<T extends CardCreateArgs>(args: SelectSubset<T, CardCreateArgs<ExtArgs>>): Prisma__CardClient<$Result.GetResult<Prisma.$CardPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Cards.
     * @param {CardCreateManyArgs} args - Arguments to create many Cards.
     * @example
     * // Create many Cards
     * const card = await prisma.card.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CardCreateManyArgs>(args?: SelectSubset<T, CardCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Cards and returns the data saved in the database.
     * @param {CardCreateManyAndReturnArgs} args - Arguments to create many Cards.
     * @example
     * // Create many Cards
     * const card = await prisma.card.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Cards and only return the `id`
     * const cardWithIdOnly = await prisma.card.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CardCreateManyAndReturnArgs>(args?: SelectSubset<T, CardCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CardPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Card.
     * @param {CardDeleteArgs} args - Arguments to delete one Card.
     * @example
     * // Delete one Card
     * const Card = await prisma.card.delete({
     *   where: {
     *     // ... filter to delete one Card
     *   }
     * })
     * 
     */
    delete<T extends CardDeleteArgs>(args: SelectSubset<T, CardDeleteArgs<ExtArgs>>): Prisma__CardClient<$Result.GetResult<Prisma.$CardPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Card.
     * @param {CardUpdateArgs} args - Arguments to update one Card.
     * @example
     * // Update one Card
     * const card = await prisma.card.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CardUpdateArgs>(args: SelectSubset<T, CardUpdateArgs<ExtArgs>>): Prisma__CardClient<$Result.GetResult<Prisma.$CardPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Cards.
     * @param {CardDeleteManyArgs} args - Arguments to filter Cards to delete.
     * @example
     * // Delete a few Cards
     * const { count } = await prisma.card.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CardDeleteManyArgs>(args?: SelectSubset<T, CardDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cards
     * const card = await prisma.card.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CardUpdateManyArgs>(args: SelectSubset<T, CardUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Card.
     * @param {CardUpsertArgs} args - Arguments to update or create a Card.
     * @example
     * // Update or create a Card
     * const card = await prisma.card.upsert({
     *   create: {
     *     // ... data to create a Card
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Card we want to update
     *   }
     * })
     */
    upsert<T extends CardUpsertArgs>(args: SelectSubset<T, CardUpsertArgs<ExtArgs>>): Prisma__CardClient<$Result.GetResult<Prisma.$CardPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Cards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardCountArgs} args - Arguments to filter Cards to count.
     * @example
     * // Count the number of Cards
     * const count = await prisma.card.count({
     *   where: {
     *     // ... the filter for the Cards we want to count
     *   }
     * })
    **/
    count<T extends CardCountArgs>(
      args?: Subset<T, CardCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CardCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Card.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CardAggregateArgs>(args: Subset<T, CardAggregateArgs>): Prisma.PrismaPromise<GetCardAggregateType<T>>

    /**
     * Group by Card.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CardGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CardGroupByArgs['orderBy'] }
        : { orderBy?: CardGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CardGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCardGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Card model
   */
  readonly fields: CardFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Card.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CardClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Card model
   */ 
  interface CardFieldRefs {
    readonly id: FieldRef<"Card", 'String'>
    readonly name: FieldRef<"Card", 'String'>
    readonly lastFourNumbers: FieldRef<"Card", 'String'>
    readonly invoiceClosingDay: FieldRef<"Card", 'Int'>
    readonly invoiceAmount: FieldRef<"Card", 'Float'>
    readonly creditLimit: FieldRef<"Card", 'Float'>
    readonly dueDate: FieldRef<"Card", 'Int'>
    readonly userId: FieldRef<"Card", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Card findUnique
   */
  export type CardFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Card
     */
    select?: CardSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardInclude<ExtArgs> | null
    /**
     * Filter, which Card to fetch.
     */
    where: CardWhereUniqueInput
  }

  /**
   * Card findUniqueOrThrow
   */
  export type CardFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Card
     */
    select?: CardSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardInclude<ExtArgs> | null
    /**
     * Filter, which Card to fetch.
     */
    where: CardWhereUniqueInput
  }

  /**
   * Card findFirst
   */
  export type CardFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Card
     */
    select?: CardSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardInclude<ExtArgs> | null
    /**
     * Filter, which Card to fetch.
     */
    where?: CardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cards to fetch.
     */
    orderBy?: CardOrderByWithRelationInput | CardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cards.
     */
    cursor?: CardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cards.
     */
    distinct?: CardScalarFieldEnum | CardScalarFieldEnum[]
  }

  /**
   * Card findFirstOrThrow
   */
  export type CardFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Card
     */
    select?: CardSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardInclude<ExtArgs> | null
    /**
     * Filter, which Card to fetch.
     */
    where?: CardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cards to fetch.
     */
    orderBy?: CardOrderByWithRelationInput | CardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cards.
     */
    cursor?: CardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cards.
     */
    distinct?: CardScalarFieldEnum | CardScalarFieldEnum[]
  }

  /**
   * Card findMany
   */
  export type CardFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Card
     */
    select?: CardSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardInclude<ExtArgs> | null
    /**
     * Filter, which Cards to fetch.
     */
    where?: CardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cards to fetch.
     */
    orderBy?: CardOrderByWithRelationInput | CardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Cards.
     */
    cursor?: CardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cards.
     */
    skip?: number
    distinct?: CardScalarFieldEnum | CardScalarFieldEnum[]
  }

  /**
   * Card create
   */
  export type CardCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Card
     */
    select?: CardSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardInclude<ExtArgs> | null
    /**
     * The data needed to create a Card.
     */
    data: XOR<CardCreateInput, CardUncheckedCreateInput>
  }

  /**
   * Card createMany
   */
  export type CardCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Cards.
     */
    data: CardCreateManyInput | CardCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Card createManyAndReturn
   */
  export type CardCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Card
     */
    select?: CardSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Cards.
     */
    data: CardCreateManyInput | CardCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Card update
   */
  export type CardUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Card
     */
    select?: CardSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardInclude<ExtArgs> | null
    /**
     * The data needed to update a Card.
     */
    data: XOR<CardUpdateInput, CardUncheckedUpdateInput>
    /**
     * Choose, which Card to update.
     */
    where: CardWhereUniqueInput
  }

  /**
   * Card updateMany
   */
  export type CardUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Cards.
     */
    data: XOR<CardUpdateManyMutationInput, CardUncheckedUpdateManyInput>
    /**
     * Filter which Cards to update
     */
    where?: CardWhereInput
  }

  /**
   * Card upsert
   */
  export type CardUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Card
     */
    select?: CardSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardInclude<ExtArgs> | null
    /**
     * The filter to search for the Card to update in case it exists.
     */
    where: CardWhereUniqueInput
    /**
     * In case the Card found by the `where` argument doesn't exist, create a new Card with this data.
     */
    create: XOR<CardCreateInput, CardUncheckedCreateInput>
    /**
     * In case the Card was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CardUpdateInput, CardUncheckedUpdateInput>
  }

  /**
   * Card delete
   */
  export type CardDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Card
     */
    select?: CardSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardInclude<ExtArgs> | null
    /**
     * Filter which Card to delete.
     */
    where: CardWhereUniqueInput
  }

  /**
   * Card deleteMany
   */
  export type CardDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cards to delete
     */
    where?: CardWhereInput
  }

  /**
   * Card without action
   */
  export type CardDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Card
     */
    select?: CardSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardInclude<ExtArgs> | null
  }


  /**
   * Model Expense
   */

  export type AggregateExpense = {
    _count: ExpenseCountAggregateOutputType | null
    _avg: ExpenseAvgAggregateOutputType | null
    _sum: ExpenseSumAggregateOutputType | null
    _min: ExpenseMinAggregateOutputType | null
    _max: ExpenseMaxAggregateOutputType | null
  }

  export type ExpenseAvgAggregateOutputType = {
    amount: number | null
  }

  export type ExpenseSumAggregateOutputType = {
    amount: number | null
  }

  export type ExpenseMinAggregateOutputType = {
    id: string | null
    name: string | null
    amount: number | null
    type: $Enums.ExpenseType | null
    paymentMethod: $Enums.PaymentMethod | null
    category: $Enums.ExpenseCategory | null
    description: string | null
    date: Date | null
    userId: string | null
  }

  export type ExpenseMaxAggregateOutputType = {
    id: string | null
    name: string | null
    amount: number | null
    type: $Enums.ExpenseType | null
    paymentMethod: $Enums.PaymentMethod | null
    category: $Enums.ExpenseCategory | null
    description: string | null
    date: Date | null
    userId: string | null
  }

  export type ExpenseCountAggregateOutputType = {
    id: number
    name: number
    amount: number
    type: number
    paymentMethod: number
    category: number
    description: number
    date: number
    userId: number
    _all: number
  }


  export type ExpenseAvgAggregateInputType = {
    amount?: true
  }

  export type ExpenseSumAggregateInputType = {
    amount?: true
  }

  export type ExpenseMinAggregateInputType = {
    id?: true
    name?: true
    amount?: true
    type?: true
    paymentMethod?: true
    category?: true
    description?: true
    date?: true
    userId?: true
  }

  export type ExpenseMaxAggregateInputType = {
    id?: true
    name?: true
    amount?: true
    type?: true
    paymentMethod?: true
    category?: true
    description?: true
    date?: true
    userId?: true
  }

  export type ExpenseCountAggregateInputType = {
    id?: true
    name?: true
    amount?: true
    type?: true
    paymentMethod?: true
    category?: true
    description?: true
    date?: true
    userId?: true
    _all?: true
  }

  export type ExpenseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Expense to aggregate.
     */
    where?: ExpenseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Expenses to fetch.
     */
    orderBy?: ExpenseOrderByWithRelationInput | ExpenseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ExpenseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Expenses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Expenses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Expenses
    **/
    _count?: true | ExpenseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ExpenseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ExpenseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExpenseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExpenseMaxAggregateInputType
  }

  export type GetExpenseAggregateType<T extends ExpenseAggregateArgs> = {
        [P in keyof T & keyof AggregateExpense]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExpense[P]>
      : GetScalarType<T[P], AggregateExpense[P]>
  }




  export type ExpenseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExpenseWhereInput
    orderBy?: ExpenseOrderByWithAggregationInput | ExpenseOrderByWithAggregationInput[]
    by: ExpenseScalarFieldEnum[] | ExpenseScalarFieldEnum
    having?: ExpenseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExpenseCountAggregateInputType | true
    _avg?: ExpenseAvgAggregateInputType
    _sum?: ExpenseSumAggregateInputType
    _min?: ExpenseMinAggregateInputType
    _max?: ExpenseMaxAggregateInputType
  }

  export type ExpenseGroupByOutputType = {
    id: string
    name: string
    amount: number
    type: $Enums.ExpenseType
    paymentMethod: $Enums.PaymentMethod
    category: $Enums.ExpenseCategory
    description: string
    date: Date
    userId: string
    _count: ExpenseCountAggregateOutputType | null
    _avg: ExpenseAvgAggregateOutputType | null
    _sum: ExpenseSumAggregateOutputType | null
    _min: ExpenseMinAggregateOutputType | null
    _max: ExpenseMaxAggregateOutputType | null
  }

  type GetExpenseGroupByPayload<T extends ExpenseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExpenseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExpenseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExpenseGroupByOutputType[P]>
            : GetScalarType<T[P], ExpenseGroupByOutputType[P]>
        }
      >
    >


  export type ExpenseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    amount?: boolean
    type?: boolean
    paymentMethod?: boolean
    category?: boolean
    description?: boolean
    date?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["expense"]>

  export type ExpenseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    amount?: boolean
    type?: boolean
    paymentMethod?: boolean
    category?: boolean
    description?: boolean
    date?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["expense"]>

  export type ExpenseSelectScalar = {
    id?: boolean
    name?: boolean
    amount?: boolean
    type?: boolean
    paymentMethod?: boolean
    category?: boolean
    description?: boolean
    date?: boolean
    userId?: boolean
  }

  export type ExpenseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ExpenseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ExpensePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Expense"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      amount: number
      type: $Enums.ExpenseType
      paymentMethod: $Enums.PaymentMethod
      category: $Enums.ExpenseCategory
      description: string
      date: Date
      userId: string
    }, ExtArgs["result"]["expense"]>
    composites: {}
  }

  type ExpenseGetPayload<S extends boolean | null | undefined | ExpenseDefaultArgs> = $Result.GetResult<Prisma.$ExpensePayload, S>

  type ExpenseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ExpenseFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ExpenseCountAggregateInputType | true
    }

  export interface ExpenseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Expense'], meta: { name: 'Expense' } }
    /**
     * Find zero or one Expense that matches the filter.
     * @param {ExpenseFindUniqueArgs} args - Arguments to find a Expense
     * @example
     * // Get one Expense
     * const expense = await prisma.expense.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ExpenseFindUniqueArgs>(args: SelectSubset<T, ExpenseFindUniqueArgs<ExtArgs>>): Prisma__ExpenseClient<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Expense that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ExpenseFindUniqueOrThrowArgs} args - Arguments to find a Expense
     * @example
     * // Get one Expense
     * const expense = await prisma.expense.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ExpenseFindUniqueOrThrowArgs>(args: SelectSubset<T, ExpenseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ExpenseClient<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Expense that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseFindFirstArgs} args - Arguments to find a Expense
     * @example
     * // Get one Expense
     * const expense = await prisma.expense.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ExpenseFindFirstArgs>(args?: SelectSubset<T, ExpenseFindFirstArgs<ExtArgs>>): Prisma__ExpenseClient<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Expense that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseFindFirstOrThrowArgs} args - Arguments to find a Expense
     * @example
     * // Get one Expense
     * const expense = await prisma.expense.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ExpenseFindFirstOrThrowArgs>(args?: SelectSubset<T, ExpenseFindFirstOrThrowArgs<ExtArgs>>): Prisma__ExpenseClient<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Expenses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Expenses
     * const expenses = await prisma.expense.findMany()
     * 
     * // Get first 10 Expenses
     * const expenses = await prisma.expense.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const expenseWithIdOnly = await prisma.expense.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ExpenseFindManyArgs>(args?: SelectSubset<T, ExpenseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Expense.
     * @param {ExpenseCreateArgs} args - Arguments to create a Expense.
     * @example
     * // Create one Expense
     * const Expense = await prisma.expense.create({
     *   data: {
     *     // ... data to create a Expense
     *   }
     * })
     * 
     */
    create<T extends ExpenseCreateArgs>(args: SelectSubset<T, ExpenseCreateArgs<ExtArgs>>): Prisma__ExpenseClient<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Expenses.
     * @param {ExpenseCreateManyArgs} args - Arguments to create many Expenses.
     * @example
     * // Create many Expenses
     * const expense = await prisma.expense.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ExpenseCreateManyArgs>(args?: SelectSubset<T, ExpenseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Expenses and returns the data saved in the database.
     * @param {ExpenseCreateManyAndReturnArgs} args - Arguments to create many Expenses.
     * @example
     * // Create many Expenses
     * const expense = await prisma.expense.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Expenses and only return the `id`
     * const expenseWithIdOnly = await prisma.expense.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ExpenseCreateManyAndReturnArgs>(args?: SelectSubset<T, ExpenseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Expense.
     * @param {ExpenseDeleteArgs} args - Arguments to delete one Expense.
     * @example
     * // Delete one Expense
     * const Expense = await prisma.expense.delete({
     *   where: {
     *     // ... filter to delete one Expense
     *   }
     * })
     * 
     */
    delete<T extends ExpenseDeleteArgs>(args: SelectSubset<T, ExpenseDeleteArgs<ExtArgs>>): Prisma__ExpenseClient<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Expense.
     * @param {ExpenseUpdateArgs} args - Arguments to update one Expense.
     * @example
     * // Update one Expense
     * const expense = await prisma.expense.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ExpenseUpdateArgs>(args: SelectSubset<T, ExpenseUpdateArgs<ExtArgs>>): Prisma__ExpenseClient<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Expenses.
     * @param {ExpenseDeleteManyArgs} args - Arguments to filter Expenses to delete.
     * @example
     * // Delete a few Expenses
     * const { count } = await prisma.expense.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ExpenseDeleteManyArgs>(args?: SelectSubset<T, ExpenseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Expenses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Expenses
     * const expense = await prisma.expense.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ExpenseUpdateManyArgs>(args: SelectSubset<T, ExpenseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Expense.
     * @param {ExpenseUpsertArgs} args - Arguments to update or create a Expense.
     * @example
     * // Update or create a Expense
     * const expense = await prisma.expense.upsert({
     *   create: {
     *     // ... data to create a Expense
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Expense we want to update
     *   }
     * })
     */
    upsert<T extends ExpenseUpsertArgs>(args: SelectSubset<T, ExpenseUpsertArgs<ExtArgs>>): Prisma__ExpenseClient<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Expenses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseCountArgs} args - Arguments to filter Expenses to count.
     * @example
     * // Count the number of Expenses
     * const count = await prisma.expense.count({
     *   where: {
     *     // ... the filter for the Expenses we want to count
     *   }
     * })
    **/
    count<T extends ExpenseCountArgs>(
      args?: Subset<T, ExpenseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExpenseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Expense.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ExpenseAggregateArgs>(args: Subset<T, ExpenseAggregateArgs>): Prisma.PrismaPromise<GetExpenseAggregateType<T>>

    /**
     * Group by Expense.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ExpenseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ExpenseGroupByArgs['orderBy'] }
        : { orderBy?: ExpenseGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ExpenseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExpenseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Expense model
   */
  readonly fields: ExpenseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Expense.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ExpenseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Expense model
   */ 
  interface ExpenseFieldRefs {
    readonly id: FieldRef<"Expense", 'String'>
    readonly name: FieldRef<"Expense", 'String'>
    readonly amount: FieldRef<"Expense", 'Float'>
    readonly type: FieldRef<"Expense", 'ExpenseType'>
    readonly paymentMethod: FieldRef<"Expense", 'PaymentMethod'>
    readonly category: FieldRef<"Expense", 'ExpenseCategory'>
    readonly description: FieldRef<"Expense", 'String'>
    readonly date: FieldRef<"Expense", 'DateTime'>
    readonly userId: FieldRef<"Expense", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Expense findUnique
   */
  export type ExpenseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseInclude<ExtArgs> | null
    /**
     * Filter, which Expense to fetch.
     */
    where: ExpenseWhereUniqueInput
  }

  /**
   * Expense findUniqueOrThrow
   */
  export type ExpenseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseInclude<ExtArgs> | null
    /**
     * Filter, which Expense to fetch.
     */
    where: ExpenseWhereUniqueInput
  }

  /**
   * Expense findFirst
   */
  export type ExpenseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseInclude<ExtArgs> | null
    /**
     * Filter, which Expense to fetch.
     */
    where?: ExpenseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Expenses to fetch.
     */
    orderBy?: ExpenseOrderByWithRelationInput | ExpenseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Expenses.
     */
    cursor?: ExpenseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Expenses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Expenses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Expenses.
     */
    distinct?: ExpenseScalarFieldEnum | ExpenseScalarFieldEnum[]
  }

  /**
   * Expense findFirstOrThrow
   */
  export type ExpenseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseInclude<ExtArgs> | null
    /**
     * Filter, which Expense to fetch.
     */
    where?: ExpenseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Expenses to fetch.
     */
    orderBy?: ExpenseOrderByWithRelationInput | ExpenseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Expenses.
     */
    cursor?: ExpenseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Expenses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Expenses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Expenses.
     */
    distinct?: ExpenseScalarFieldEnum | ExpenseScalarFieldEnum[]
  }

  /**
   * Expense findMany
   */
  export type ExpenseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseInclude<ExtArgs> | null
    /**
     * Filter, which Expenses to fetch.
     */
    where?: ExpenseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Expenses to fetch.
     */
    orderBy?: ExpenseOrderByWithRelationInput | ExpenseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Expenses.
     */
    cursor?: ExpenseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Expenses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Expenses.
     */
    skip?: number
    distinct?: ExpenseScalarFieldEnum | ExpenseScalarFieldEnum[]
  }

  /**
   * Expense create
   */
  export type ExpenseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseInclude<ExtArgs> | null
    /**
     * The data needed to create a Expense.
     */
    data: XOR<ExpenseCreateInput, ExpenseUncheckedCreateInput>
  }

  /**
   * Expense createMany
   */
  export type ExpenseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Expenses.
     */
    data: ExpenseCreateManyInput | ExpenseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Expense createManyAndReturn
   */
  export type ExpenseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Expenses.
     */
    data: ExpenseCreateManyInput | ExpenseCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Expense update
   */
  export type ExpenseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseInclude<ExtArgs> | null
    /**
     * The data needed to update a Expense.
     */
    data: XOR<ExpenseUpdateInput, ExpenseUncheckedUpdateInput>
    /**
     * Choose, which Expense to update.
     */
    where: ExpenseWhereUniqueInput
  }

  /**
   * Expense updateMany
   */
  export type ExpenseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Expenses.
     */
    data: XOR<ExpenseUpdateManyMutationInput, ExpenseUncheckedUpdateManyInput>
    /**
     * Filter which Expenses to update
     */
    where?: ExpenseWhereInput
  }

  /**
   * Expense upsert
   */
  export type ExpenseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseInclude<ExtArgs> | null
    /**
     * The filter to search for the Expense to update in case it exists.
     */
    where: ExpenseWhereUniqueInput
    /**
     * In case the Expense found by the `where` argument doesn't exist, create a new Expense with this data.
     */
    create: XOR<ExpenseCreateInput, ExpenseUncheckedCreateInput>
    /**
     * In case the Expense was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ExpenseUpdateInput, ExpenseUncheckedUpdateInput>
  }

  /**
   * Expense delete
   */
  export type ExpenseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseInclude<ExtArgs> | null
    /**
     * Filter which Expense to delete.
     */
    where: ExpenseWhereUniqueInput
  }

  /**
   * Expense deleteMany
   */
  export type ExpenseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Expenses to delete
     */
    where?: ExpenseWhereInput
  }

  /**
   * Expense without action
   */
  export type ExpenseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseInclude<ExtArgs> | null
  }


  /**
   * Model Income
   */

  export type AggregateIncome = {
    _count: IncomeCountAggregateOutputType | null
    _avg: IncomeAvgAggregateOutputType | null
    _sum: IncomeSumAggregateOutputType | null
    _min: IncomeMinAggregateOutputType | null
    _max: IncomeMaxAggregateOutputType | null
  }

  export type IncomeAvgAggregateOutputType = {
    amount: number | null
  }

  export type IncomeSumAggregateOutputType = {
    amount: number | null
  }

  export type IncomeMinAggregateOutputType = {
    id: string | null
    name: string | null
    amount: number | null
    category: $Enums.IncomeCategory | null
    date: Date | null
    userId: string | null
  }

  export type IncomeMaxAggregateOutputType = {
    id: string | null
    name: string | null
    amount: number | null
    category: $Enums.IncomeCategory | null
    date: Date | null
    userId: string | null
  }

  export type IncomeCountAggregateOutputType = {
    id: number
    name: number
    amount: number
    category: number
    date: number
    userId: number
    _all: number
  }


  export type IncomeAvgAggregateInputType = {
    amount?: true
  }

  export type IncomeSumAggregateInputType = {
    amount?: true
  }

  export type IncomeMinAggregateInputType = {
    id?: true
    name?: true
    amount?: true
    category?: true
    date?: true
    userId?: true
  }

  export type IncomeMaxAggregateInputType = {
    id?: true
    name?: true
    amount?: true
    category?: true
    date?: true
    userId?: true
  }

  export type IncomeCountAggregateInputType = {
    id?: true
    name?: true
    amount?: true
    category?: true
    date?: true
    userId?: true
    _all?: true
  }

  export type IncomeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Income to aggregate.
     */
    where?: IncomeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Incomes to fetch.
     */
    orderBy?: IncomeOrderByWithRelationInput | IncomeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: IncomeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Incomes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Incomes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Incomes
    **/
    _count?: true | IncomeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: IncomeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: IncomeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: IncomeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: IncomeMaxAggregateInputType
  }

  export type GetIncomeAggregateType<T extends IncomeAggregateArgs> = {
        [P in keyof T & keyof AggregateIncome]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIncome[P]>
      : GetScalarType<T[P], AggregateIncome[P]>
  }




  export type IncomeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IncomeWhereInput
    orderBy?: IncomeOrderByWithAggregationInput | IncomeOrderByWithAggregationInput[]
    by: IncomeScalarFieldEnum[] | IncomeScalarFieldEnum
    having?: IncomeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: IncomeCountAggregateInputType | true
    _avg?: IncomeAvgAggregateInputType
    _sum?: IncomeSumAggregateInputType
    _min?: IncomeMinAggregateInputType
    _max?: IncomeMaxAggregateInputType
  }

  export type IncomeGroupByOutputType = {
    id: string
    name: string
    amount: number
    category: $Enums.IncomeCategory
    date: Date
    userId: string
    _count: IncomeCountAggregateOutputType | null
    _avg: IncomeAvgAggregateOutputType | null
    _sum: IncomeSumAggregateOutputType | null
    _min: IncomeMinAggregateOutputType | null
    _max: IncomeMaxAggregateOutputType | null
  }

  type GetIncomeGroupByPayload<T extends IncomeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<IncomeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof IncomeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], IncomeGroupByOutputType[P]>
            : GetScalarType<T[P], IncomeGroupByOutputType[P]>
        }
      >
    >


  export type IncomeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    amount?: boolean
    category?: boolean
    date?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["income"]>

  export type IncomeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    amount?: boolean
    category?: boolean
    date?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["income"]>

  export type IncomeSelectScalar = {
    id?: boolean
    name?: boolean
    amount?: boolean
    category?: boolean
    date?: boolean
    userId?: boolean
  }

  export type IncomeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type IncomeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $IncomePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Income"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      amount: number
      category: $Enums.IncomeCategory
      date: Date
      userId: string
    }, ExtArgs["result"]["income"]>
    composites: {}
  }

  type IncomeGetPayload<S extends boolean | null | undefined | IncomeDefaultArgs> = $Result.GetResult<Prisma.$IncomePayload, S>

  type IncomeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<IncomeFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: IncomeCountAggregateInputType | true
    }

  export interface IncomeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Income'], meta: { name: 'Income' } }
    /**
     * Find zero or one Income that matches the filter.
     * @param {IncomeFindUniqueArgs} args - Arguments to find a Income
     * @example
     * // Get one Income
     * const income = await prisma.income.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends IncomeFindUniqueArgs>(args: SelectSubset<T, IncomeFindUniqueArgs<ExtArgs>>): Prisma__IncomeClient<$Result.GetResult<Prisma.$IncomePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Income that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {IncomeFindUniqueOrThrowArgs} args - Arguments to find a Income
     * @example
     * // Get one Income
     * const income = await prisma.income.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends IncomeFindUniqueOrThrowArgs>(args: SelectSubset<T, IncomeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__IncomeClient<$Result.GetResult<Prisma.$IncomePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Income that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IncomeFindFirstArgs} args - Arguments to find a Income
     * @example
     * // Get one Income
     * const income = await prisma.income.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends IncomeFindFirstArgs>(args?: SelectSubset<T, IncomeFindFirstArgs<ExtArgs>>): Prisma__IncomeClient<$Result.GetResult<Prisma.$IncomePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Income that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IncomeFindFirstOrThrowArgs} args - Arguments to find a Income
     * @example
     * // Get one Income
     * const income = await prisma.income.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends IncomeFindFirstOrThrowArgs>(args?: SelectSubset<T, IncomeFindFirstOrThrowArgs<ExtArgs>>): Prisma__IncomeClient<$Result.GetResult<Prisma.$IncomePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Incomes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IncomeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Incomes
     * const incomes = await prisma.income.findMany()
     * 
     * // Get first 10 Incomes
     * const incomes = await prisma.income.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const incomeWithIdOnly = await prisma.income.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends IncomeFindManyArgs>(args?: SelectSubset<T, IncomeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IncomePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Income.
     * @param {IncomeCreateArgs} args - Arguments to create a Income.
     * @example
     * // Create one Income
     * const Income = await prisma.income.create({
     *   data: {
     *     // ... data to create a Income
     *   }
     * })
     * 
     */
    create<T extends IncomeCreateArgs>(args: SelectSubset<T, IncomeCreateArgs<ExtArgs>>): Prisma__IncomeClient<$Result.GetResult<Prisma.$IncomePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Incomes.
     * @param {IncomeCreateManyArgs} args - Arguments to create many Incomes.
     * @example
     * // Create many Incomes
     * const income = await prisma.income.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends IncomeCreateManyArgs>(args?: SelectSubset<T, IncomeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Incomes and returns the data saved in the database.
     * @param {IncomeCreateManyAndReturnArgs} args - Arguments to create many Incomes.
     * @example
     * // Create many Incomes
     * const income = await prisma.income.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Incomes and only return the `id`
     * const incomeWithIdOnly = await prisma.income.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends IncomeCreateManyAndReturnArgs>(args?: SelectSubset<T, IncomeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IncomePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Income.
     * @param {IncomeDeleteArgs} args - Arguments to delete one Income.
     * @example
     * // Delete one Income
     * const Income = await prisma.income.delete({
     *   where: {
     *     // ... filter to delete one Income
     *   }
     * })
     * 
     */
    delete<T extends IncomeDeleteArgs>(args: SelectSubset<T, IncomeDeleteArgs<ExtArgs>>): Prisma__IncomeClient<$Result.GetResult<Prisma.$IncomePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Income.
     * @param {IncomeUpdateArgs} args - Arguments to update one Income.
     * @example
     * // Update one Income
     * const income = await prisma.income.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends IncomeUpdateArgs>(args: SelectSubset<T, IncomeUpdateArgs<ExtArgs>>): Prisma__IncomeClient<$Result.GetResult<Prisma.$IncomePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Incomes.
     * @param {IncomeDeleteManyArgs} args - Arguments to filter Incomes to delete.
     * @example
     * // Delete a few Incomes
     * const { count } = await prisma.income.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends IncomeDeleteManyArgs>(args?: SelectSubset<T, IncomeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Incomes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IncomeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Incomes
     * const income = await prisma.income.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends IncomeUpdateManyArgs>(args: SelectSubset<T, IncomeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Income.
     * @param {IncomeUpsertArgs} args - Arguments to update or create a Income.
     * @example
     * // Update or create a Income
     * const income = await prisma.income.upsert({
     *   create: {
     *     // ... data to create a Income
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Income we want to update
     *   }
     * })
     */
    upsert<T extends IncomeUpsertArgs>(args: SelectSubset<T, IncomeUpsertArgs<ExtArgs>>): Prisma__IncomeClient<$Result.GetResult<Prisma.$IncomePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Incomes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IncomeCountArgs} args - Arguments to filter Incomes to count.
     * @example
     * // Count the number of Incomes
     * const count = await prisma.income.count({
     *   where: {
     *     // ... the filter for the Incomes we want to count
     *   }
     * })
    **/
    count<T extends IncomeCountArgs>(
      args?: Subset<T, IncomeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], IncomeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Income.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IncomeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends IncomeAggregateArgs>(args: Subset<T, IncomeAggregateArgs>): Prisma.PrismaPromise<GetIncomeAggregateType<T>>

    /**
     * Group by Income.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IncomeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends IncomeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: IncomeGroupByArgs['orderBy'] }
        : { orderBy?: IncomeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, IncomeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIncomeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Income model
   */
  readonly fields: IncomeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Income.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__IncomeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Income model
   */ 
  interface IncomeFieldRefs {
    readonly id: FieldRef<"Income", 'String'>
    readonly name: FieldRef<"Income", 'String'>
    readonly amount: FieldRef<"Income", 'Float'>
    readonly category: FieldRef<"Income", 'IncomeCategory'>
    readonly date: FieldRef<"Income", 'DateTime'>
    readonly userId: FieldRef<"Income", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Income findUnique
   */
  export type IncomeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Income
     */
    select?: IncomeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncomeInclude<ExtArgs> | null
    /**
     * Filter, which Income to fetch.
     */
    where: IncomeWhereUniqueInput
  }

  /**
   * Income findUniqueOrThrow
   */
  export type IncomeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Income
     */
    select?: IncomeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncomeInclude<ExtArgs> | null
    /**
     * Filter, which Income to fetch.
     */
    where: IncomeWhereUniqueInput
  }

  /**
   * Income findFirst
   */
  export type IncomeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Income
     */
    select?: IncomeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncomeInclude<ExtArgs> | null
    /**
     * Filter, which Income to fetch.
     */
    where?: IncomeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Incomes to fetch.
     */
    orderBy?: IncomeOrderByWithRelationInput | IncomeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Incomes.
     */
    cursor?: IncomeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Incomes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Incomes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Incomes.
     */
    distinct?: IncomeScalarFieldEnum | IncomeScalarFieldEnum[]
  }

  /**
   * Income findFirstOrThrow
   */
  export type IncomeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Income
     */
    select?: IncomeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncomeInclude<ExtArgs> | null
    /**
     * Filter, which Income to fetch.
     */
    where?: IncomeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Incomes to fetch.
     */
    orderBy?: IncomeOrderByWithRelationInput | IncomeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Incomes.
     */
    cursor?: IncomeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Incomes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Incomes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Incomes.
     */
    distinct?: IncomeScalarFieldEnum | IncomeScalarFieldEnum[]
  }

  /**
   * Income findMany
   */
  export type IncomeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Income
     */
    select?: IncomeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncomeInclude<ExtArgs> | null
    /**
     * Filter, which Incomes to fetch.
     */
    where?: IncomeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Incomes to fetch.
     */
    orderBy?: IncomeOrderByWithRelationInput | IncomeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Incomes.
     */
    cursor?: IncomeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Incomes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Incomes.
     */
    skip?: number
    distinct?: IncomeScalarFieldEnum | IncomeScalarFieldEnum[]
  }

  /**
   * Income create
   */
  export type IncomeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Income
     */
    select?: IncomeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncomeInclude<ExtArgs> | null
    /**
     * The data needed to create a Income.
     */
    data: XOR<IncomeCreateInput, IncomeUncheckedCreateInput>
  }

  /**
   * Income createMany
   */
  export type IncomeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Incomes.
     */
    data: IncomeCreateManyInput | IncomeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Income createManyAndReturn
   */
  export type IncomeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Income
     */
    select?: IncomeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Incomes.
     */
    data: IncomeCreateManyInput | IncomeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncomeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Income update
   */
  export type IncomeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Income
     */
    select?: IncomeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncomeInclude<ExtArgs> | null
    /**
     * The data needed to update a Income.
     */
    data: XOR<IncomeUpdateInput, IncomeUncheckedUpdateInput>
    /**
     * Choose, which Income to update.
     */
    where: IncomeWhereUniqueInput
  }

  /**
   * Income updateMany
   */
  export type IncomeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Incomes.
     */
    data: XOR<IncomeUpdateManyMutationInput, IncomeUncheckedUpdateManyInput>
    /**
     * Filter which Incomes to update
     */
    where?: IncomeWhereInput
  }

  /**
   * Income upsert
   */
  export type IncomeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Income
     */
    select?: IncomeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncomeInclude<ExtArgs> | null
    /**
     * The filter to search for the Income to update in case it exists.
     */
    where: IncomeWhereUniqueInput
    /**
     * In case the Income found by the `where` argument doesn't exist, create a new Income with this data.
     */
    create: XOR<IncomeCreateInput, IncomeUncheckedCreateInput>
    /**
     * In case the Income was found with the provided `where` argument, update it with this data.
     */
    update: XOR<IncomeUpdateInput, IncomeUncheckedUpdateInput>
  }

  /**
   * Income delete
   */
  export type IncomeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Income
     */
    select?: IncomeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncomeInclude<ExtArgs> | null
    /**
     * Filter which Income to delete.
     */
    where: IncomeWhereUniqueInput
  }

  /**
   * Income deleteMany
   */
  export type IncomeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Incomes to delete
     */
    where?: IncomeWhereInput
  }

  /**
   * Income without action
   */
  export type IncomeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Income
     */
    select?: IncomeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncomeInclude<ExtArgs> | null
  }


  /**
   * Model Savings
   */

  export type AggregateSavings = {
    _count: SavingsCountAggregateOutputType | null
    _avg: SavingsAvgAggregateOutputType | null
    _sum: SavingsSumAggregateOutputType | null
    _min: SavingsMinAggregateOutputType | null
    _max: SavingsMaxAggregateOutputType | null
  }

  export type SavingsAvgAggregateOutputType = {
    totalAmount: number | null
  }

  export type SavingsSumAggregateOutputType = {
    totalAmount: number | null
  }

  export type SavingsMinAggregateOutputType = {
    id: string | null
    name: string | null
    totalAmount: number | null
    userId: string | null
  }

  export type SavingsMaxAggregateOutputType = {
    id: string | null
    name: string | null
    totalAmount: number | null
    userId: string | null
  }

  export type SavingsCountAggregateOutputType = {
    id: number
    name: number
    totalAmount: number
    userId: number
    _all: number
  }


  export type SavingsAvgAggregateInputType = {
    totalAmount?: true
  }

  export type SavingsSumAggregateInputType = {
    totalAmount?: true
  }

  export type SavingsMinAggregateInputType = {
    id?: true
    name?: true
    totalAmount?: true
    userId?: true
  }

  export type SavingsMaxAggregateInputType = {
    id?: true
    name?: true
    totalAmount?: true
    userId?: true
  }

  export type SavingsCountAggregateInputType = {
    id?: true
    name?: true
    totalAmount?: true
    userId?: true
    _all?: true
  }

  export type SavingsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Savings to aggregate.
     */
    where?: SavingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Savings to fetch.
     */
    orderBy?: SavingsOrderByWithRelationInput | SavingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SavingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Savings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Savings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Savings
    **/
    _count?: true | SavingsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SavingsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SavingsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SavingsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SavingsMaxAggregateInputType
  }

  export type GetSavingsAggregateType<T extends SavingsAggregateArgs> = {
        [P in keyof T & keyof AggregateSavings]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSavings[P]>
      : GetScalarType<T[P], AggregateSavings[P]>
  }




  export type SavingsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SavingsWhereInput
    orderBy?: SavingsOrderByWithAggregationInput | SavingsOrderByWithAggregationInput[]
    by: SavingsScalarFieldEnum[] | SavingsScalarFieldEnum
    having?: SavingsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SavingsCountAggregateInputType | true
    _avg?: SavingsAvgAggregateInputType
    _sum?: SavingsSumAggregateInputType
    _min?: SavingsMinAggregateInputType
    _max?: SavingsMaxAggregateInputType
  }

  export type SavingsGroupByOutputType = {
    id: string
    name: string
    totalAmount: number
    userId: string
    _count: SavingsCountAggregateOutputType | null
    _avg: SavingsAvgAggregateOutputType | null
    _sum: SavingsSumAggregateOutputType | null
    _min: SavingsMinAggregateOutputType | null
    _max: SavingsMaxAggregateOutputType | null
  }

  type GetSavingsGroupByPayload<T extends SavingsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SavingsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SavingsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SavingsGroupByOutputType[P]>
            : GetScalarType<T[P], SavingsGroupByOutputType[P]>
        }
      >
    >


  export type SavingsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    totalAmount?: boolean
    userId?: boolean
    entries?: boolean | Savings$entriesArgs<ExtArgs>
    withdrawals?: boolean | Savings$withdrawalsArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | SavingsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["savings"]>

  export type SavingsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    totalAmount?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["savings"]>

  export type SavingsSelectScalar = {
    id?: boolean
    name?: boolean
    totalAmount?: boolean
    userId?: boolean
  }

  export type SavingsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    entries?: boolean | Savings$entriesArgs<ExtArgs>
    withdrawals?: boolean | Savings$withdrawalsArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | SavingsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SavingsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SavingsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Savings"
    objects: {
      entries: Prisma.$SavingsEntryPayload<ExtArgs>[]
      withdrawals: Prisma.$SavingsWithdrawalPayload<ExtArgs>[]
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      totalAmount: number
      userId: string
    }, ExtArgs["result"]["savings"]>
    composites: {}
  }

  type SavingsGetPayload<S extends boolean | null | undefined | SavingsDefaultArgs> = $Result.GetResult<Prisma.$SavingsPayload, S>

  type SavingsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SavingsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SavingsCountAggregateInputType | true
    }

  export interface SavingsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Savings'], meta: { name: 'Savings' } }
    /**
     * Find zero or one Savings that matches the filter.
     * @param {SavingsFindUniqueArgs} args - Arguments to find a Savings
     * @example
     * // Get one Savings
     * const savings = await prisma.savings.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SavingsFindUniqueArgs>(args: SelectSubset<T, SavingsFindUniqueArgs<ExtArgs>>): Prisma__SavingsClient<$Result.GetResult<Prisma.$SavingsPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Savings that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {SavingsFindUniqueOrThrowArgs} args - Arguments to find a Savings
     * @example
     * // Get one Savings
     * const savings = await prisma.savings.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SavingsFindUniqueOrThrowArgs>(args: SelectSubset<T, SavingsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SavingsClient<$Result.GetResult<Prisma.$SavingsPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Savings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavingsFindFirstArgs} args - Arguments to find a Savings
     * @example
     * // Get one Savings
     * const savings = await prisma.savings.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SavingsFindFirstArgs>(args?: SelectSubset<T, SavingsFindFirstArgs<ExtArgs>>): Prisma__SavingsClient<$Result.GetResult<Prisma.$SavingsPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Savings that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavingsFindFirstOrThrowArgs} args - Arguments to find a Savings
     * @example
     * // Get one Savings
     * const savings = await prisma.savings.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SavingsFindFirstOrThrowArgs>(args?: SelectSubset<T, SavingsFindFirstOrThrowArgs<ExtArgs>>): Prisma__SavingsClient<$Result.GetResult<Prisma.$SavingsPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Savings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavingsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Savings
     * const savings = await prisma.savings.findMany()
     * 
     * // Get first 10 Savings
     * const savings = await prisma.savings.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const savingsWithIdOnly = await prisma.savings.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SavingsFindManyArgs>(args?: SelectSubset<T, SavingsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SavingsPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Savings.
     * @param {SavingsCreateArgs} args - Arguments to create a Savings.
     * @example
     * // Create one Savings
     * const Savings = await prisma.savings.create({
     *   data: {
     *     // ... data to create a Savings
     *   }
     * })
     * 
     */
    create<T extends SavingsCreateArgs>(args: SelectSubset<T, SavingsCreateArgs<ExtArgs>>): Prisma__SavingsClient<$Result.GetResult<Prisma.$SavingsPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Savings.
     * @param {SavingsCreateManyArgs} args - Arguments to create many Savings.
     * @example
     * // Create many Savings
     * const savings = await prisma.savings.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SavingsCreateManyArgs>(args?: SelectSubset<T, SavingsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Savings and returns the data saved in the database.
     * @param {SavingsCreateManyAndReturnArgs} args - Arguments to create many Savings.
     * @example
     * // Create many Savings
     * const savings = await prisma.savings.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Savings and only return the `id`
     * const savingsWithIdOnly = await prisma.savings.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SavingsCreateManyAndReturnArgs>(args?: SelectSubset<T, SavingsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SavingsPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Savings.
     * @param {SavingsDeleteArgs} args - Arguments to delete one Savings.
     * @example
     * // Delete one Savings
     * const Savings = await prisma.savings.delete({
     *   where: {
     *     // ... filter to delete one Savings
     *   }
     * })
     * 
     */
    delete<T extends SavingsDeleteArgs>(args: SelectSubset<T, SavingsDeleteArgs<ExtArgs>>): Prisma__SavingsClient<$Result.GetResult<Prisma.$SavingsPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Savings.
     * @param {SavingsUpdateArgs} args - Arguments to update one Savings.
     * @example
     * // Update one Savings
     * const savings = await prisma.savings.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SavingsUpdateArgs>(args: SelectSubset<T, SavingsUpdateArgs<ExtArgs>>): Prisma__SavingsClient<$Result.GetResult<Prisma.$SavingsPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Savings.
     * @param {SavingsDeleteManyArgs} args - Arguments to filter Savings to delete.
     * @example
     * // Delete a few Savings
     * const { count } = await prisma.savings.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SavingsDeleteManyArgs>(args?: SelectSubset<T, SavingsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Savings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavingsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Savings
     * const savings = await prisma.savings.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SavingsUpdateManyArgs>(args: SelectSubset<T, SavingsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Savings.
     * @param {SavingsUpsertArgs} args - Arguments to update or create a Savings.
     * @example
     * // Update or create a Savings
     * const savings = await prisma.savings.upsert({
     *   create: {
     *     // ... data to create a Savings
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Savings we want to update
     *   }
     * })
     */
    upsert<T extends SavingsUpsertArgs>(args: SelectSubset<T, SavingsUpsertArgs<ExtArgs>>): Prisma__SavingsClient<$Result.GetResult<Prisma.$SavingsPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Savings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavingsCountArgs} args - Arguments to filter Savings to count.
     * @example
     * // Count the number of Savings
     * const count = await prisma.savings.count({
     *   where: {
     *     // ... the filter for the Savings we want to count
     *   }
     * })
    **/
    count<T extends SavingsCountArgs>(
      args?: Subset<T, SavingsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SavingsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Savings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavingsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SavingsAggregateArgs>(args: Subset<T, SavingsAggregateArgs>): Prisma.PrismaPromise<GetSavingsAggregateType<T>>

    /**
     * Group by Savings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavingsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SavingsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SavingsGroupByArgs['orderBy'] }
        : { orderBy?: SavingsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SavingsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSavingsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Savings model
   */
  readonly fields: SavingsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Savings.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SavingsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    entries<T extends Savings$entriesArgs<ExtArgs> = {}>(args?: Subset<T, Savings$entriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SavingsEntryPayload<ExtArgs>, T, "findMany"> | Null>
    withdrawals<T extends Savings$withdrawalsArgs<ExtArgs> = {}>(args?: Subset<T, Savings$withdrawalsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SavingsWithdrawalPayload<ExtArgs>, T, "findMany"> | Null>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Savings model
   */ 
  interface SavingsFieldRefs {
    readonly id: FieldRef<"Savings", 'String'>
    readonly name: FieldRef<"Savings", 'String'>
    readonly totalAmount: FieldRef<"Savings", 'Float'>
    readonly userId: FieldRef<"Savings", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Savings findUnique
   */
  export type SavingsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Savings
     */
    select?: SavingsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavingsInclude<ExtArgs> | null
    /**
     * Filter, which Savings to fetch.
     */
    where: SavingsWhereUniqueInput
  }

  /**
   * Savings findUniqueOrThrow
   */
  export type SavingsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Savings
     */
    select?: SavingsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavingsInclude<ExtArgs> | null
    /**
     * Filter, which Savings to fetch.
     */
    where: SavingsWhereUniqueInput
  }

  /**
   * Savings findFirst
   */
  export type SavingsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Savings
     */
    select?: SavingsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavingsInclude<ExtArgs> | null
    /**
     * Filter, which Savings to fetch.
     */
    where?: SavingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Savings to fetch.
     */
    orderBy?: SavingsOrderByWithRelationInput | SavingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Savings.
     */
    cursor?: SavingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Savings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Savings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Savings.
     */
    distinct?: SavingsScalarFieldEnum | SavingsScalarFieldEnum[]
  }

  /**
   * Savings findFirstOrThrow
   */
  export type SavingsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Savings
     */
    select?: SavingsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavingsInclude<ExtArgs> | null
    /**
     * Filter, which Savings to fetch.
     */
    where?: SavingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Savings to fetch.
     */
    orderBy?: SavingsOrderByWithRelationInput | SavingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Savings.
     */
    cursor?: SavingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Savings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Savings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Savings.
     */
    distinct?: SavingsScalarFieldEnum | SavingsScalarFieldEnum[]
  }

  /**
   * Savings findMany
   */
  export type SavingsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Savings
     */
    select?: SavingsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavingsInclude<ExtArgs> | null
    /**
     * Filter, which Savings to fetch.
     */
    where?: SavingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Savings to fetch.
     */
    orderBy?: SavingsOrderByWithRelationInput | SavingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Savings.
     */
    cursor?: SavingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Savings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Savings.
     */
    skip?: number
    distinct?: SavingsScalarFieldEnum | SavingsScalarFieldEnum[]
  }

  /**
   * Savings create
   */
  export type SavingsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Savings
     */
    select?: SavingsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavingsInclude<ExtArgs> | null
    /**
     * The data needed to create a Savings.
     */
    data: XOR<SavingsCreateInput, SavingsUncheckedCreateInput>
  }

  /**
   * Savings createMany
   */
  export type SavingsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Savings.
     */
    data: SavingsCreateManyInput | SavingsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Savings createManyAndReturn
   */
  export type SavingsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Savings
     */
    select?: SavingsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Savings.
     */
    data: SavingsCreateManyInput | SavingsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavingsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Savings update
   */
  export type SavingsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Savings
     */
    select?: SavingsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavingsInclude<ExtArgs> | null
    /**
     * The data needed to update a Savings.
     */
    data: XOR<SavingsUpdateInput, SavingsUncheckedUpdateInput>
    /**
     * Choose, which Savings to update.
     */
    where: SavingsWhereUniqueInput
  }

  /**
   * Savings updateMany
   */
  export type SavingsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Savings.
     */
    data: XOR<SavingsUpdateManyMutationInput, SavingsUncheckedUpdateManyInput>
    /**
     * Filter which Savings to update
     */
    where?: SavingsWhereInput
  }

  /**
   * Savings upsert
   */
  export type SavingsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Savings
     */
    select?: SavingsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavingsInclude<ExtArgs> | null
    /**
     * The filter to search for the Savings to update in case it exists.
     */
    where: SavingsWhereUniqueInput
    /**
     * In case the Savings found by the `where` argument doesn't exist, create a new Savings with this data.
     */
    create: XOR<SavingsCreateInput, SavingsUncheckedCreateInput>
    /**
     * In case the Savings was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SavingsUpdateInput, SavingsUncheckedUpdateInput>
  }

  /**
   * Savings delete
   */
  export type SavingsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Savings
     */
    select?: SavingsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavingsInclude<ExtArgs> | null
    /**
     * Filter which Savings to delete.
     */
    where: SavingsWhereUniqueInput
  }

  /**
   * Savings deleteMany
   */
  export type SavingsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Savings to delete
     */
    where?: SavingsWhereInput
  }

  /**
   * Savings.entries
   */
  export type Savings$entriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavingsEntry
     */
    select?: SavingsEntrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavingsEntryInclude<ExtArgs> | null
    where?: SavingsEntryWhereInput
    orderBy?: SavingsEntryOrderByWithRelationInput | SavingsEntryOrderByWithRelationInput[]
    cursor?: SavingsEntryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SavingsEntryScalarFieldEnum | SavingsEntryScalarFieldEnum[]
  }

  /**
   * Savings.withdrawals
   */
  export type Savings$withdrawalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavingsWithdrawal
     */
    select?: SavingsWithdrawalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavingsWithdrawalInclude<ExtArgs> | null
    where?: SavingsWithdrawalWhereInput
    orderBy?: SavingsWithdrawalOrderByWithRelationInput | SavingsWithdrawalOrderByWithRelationInput[]
    cursor?: SavingsWithdrawalWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SavingsWithdrawalScalarFieldEnum | SavingsWithdrawalScalarFieldEnum[]
  }

  /**
   * Savings without action
   */
  export type SavingsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Savings
     */
    select?: SavingsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavingsInclude<ExtArgs> | null
  }


  /**
   * Model SavingsEntry
   */

  export type AggregateSavingsEntry = {
    _count: SavingsEntryCountAggregateOutputType | null
    _avg: SavingsEntryAvgAggregateOutputType | null
    _sum: SavingsEntrySumAggregateOutputType | null
    _min: SavingsEntryMinAggregateOutputType | null
    _max: SavingsEntryMaxAggregateOutputType | null
  }

  export type SavingsEntryAvgAggregateOutputType = {
    amount: number | null
  }

  export type SavingsEntrySumAggregateOutputType = {
    amount: number | null
  }

  export type SavingsEntryMinAggregateOutputType = {
    id: string | null
    amount: number | null
    date: Date | null
    savingsId: string | null
  }

  export type SavingsEntryMaxAggregateOutputType = {
    id: string | null
    amount: number | null
    date: Date | null
    savingsId: string | null
  }

  export type SavingsEntryCountAggregateOutputType = {
    id: number
    amount: number
    date: number
    savingsId: number
    _all: number
  }


  export type SavingsEntryAvgAggregateInputType = {
    amount?: true
  }

  export type SavingsEntrySumAggregateInputType = {
    amount?: true
  }

  export type SavingsEntryMinAggregateInputType = {
    id?: true
    amount?: true
    date?: true
    savingsId?: true
  }

  export type SavingsEntryMaxAggregateInputType = {
    id?: true
    amount?: true
    date?: true
    savingsId?: true
  }

  export type SavingsEntryCountAggregateInputType = {
    id?: true
    amount?: true
    date?: true
    savingsId?: true
    _all?: true
  }

  export type SavingsEntryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SavingsEntry to aggregate.
     */
    where?: SavingsEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SavingsEntries to fetch.
     */
    orderBy?: SavingsEntryOrderByWithRelationInput | SavingsEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SavingsEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SavingsEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SavingsEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SavingsEntries
    **/
    _count?: true | SavingsEntryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SavingsEntryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SavingsEntrySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SavingsEntryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SavingsEntryMaxAggregateInputType
  }

  export type GetSavingsEntryAggregateType<T extends SavingsEntryAggregateArgs> = {
        [P in keyof T & keyof AggregateSavingsEntry]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSavingsEntry[P]>
      : GetScalarType<T[P], AggregateSavingsEntry[P]>
  }




  export type SavingsEntryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SavingsEntryWhereInput
    orderBy?: SavingsEntryOrderByWithAggregationInput | SavingsEntryOrderByWithAggregationInput[]
    by: SavingsEntryScalarFieldEnum[] | SavingsEntryScalarFieldEnum
    having?: SavingsEntryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SavingsEntryCountAggregateInputType | true
    _avg?: SavingsEntryAvgAggregateInputType
    _sum?: SavingsEntrySumAggregateInputType
    _min?: SavingsEntryMinAggregateInputType
    _max?: SavingsEntryMaxAggregateInputType
  }

  export type SavingsEntryGroupByOutputType = {
    id: string
    amount: number
    date: Date
    savingsId: string
    _count: SavingsEntryCountAggregateOutputType | null
    _avg: SavingsEntryAvgAggregateOutputType | null
    _sum: SavingsEntrySumAggregateOutputType | null
    _min: SavingsEntryMinAggregateOutputType | null
    _max: SavingsEntryMaxAggregateOutputType | null
  }

  type GetSavingsEntryGroupByPayload<T extends SavingsEntryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SavingsEntryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SavingsEntryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SavingsEntryGroupByOutputType[P]>
            : GetScalarType<T[P], SavingsEntryGroupByOutputType[P]>
        }
      >
    >


  export type SavingsEntrySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    amount?: boolean
    date?: boolean
    savingsId?: boolean
    savings?: boolean | SavingsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["savingsEntry"]>

  export type SavingsEntrySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    amount?: boolean
    date?: boolean
    savingsId?: boolean
    savings?: boolean | SavingsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["savingsEntry"]>

  export type SavingsEntrySelectScalar = {
    id?: boolean
    amount?: boolean
    date?: boolean
    savingsId?: boolean
  }

  export type SavingsEntryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    savings?: boolean | SavingsDefaultArgs<ExtArgs>
  }
  export type SavingsEntryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    savings?: boolean | SavingsDefaultArgs<ExtArgs>
  }

  export type $SavingsEntryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SavingsEntry"
    objects: {
      savings: Prisma.$SavingsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      amount: number
      date: Date
      savingsId: string
    }, ExtArgs["result"]["savingsEntry"]>
    composites: {}
  }

  type SavingsEntryGetPayload<S extends boolean | null | undefined | SavingsEntryDefaultArgs> = $Result.GetResult<Prisma.$SavingsEntryPayload, S>

  type SavingsEntryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SavingsEntryFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SavingsEntryCountAggregateInputType | true
    }

  export interface SavingsEntryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SavingsEntry'], meta: { name: 'SavingsEntry' } }
    /**
     * Find zero or one SavingsEntry that matches the filter.
     * @param {SavingsEntryFindUniqueArgs} args - Arguments to find a SavingsEntry
     * @example
     * // Get one SavingsEntry
     * const savingsEntry = await prisma.savingsEntry.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SavingsEntryFindUniqueArgs>(args: SelectSubset<T, SavingsEntryFindUniqueArgs<ExtArgs>>): Prisma__SavingsEntryClient<$Result.GetResult<Prisma.$SavingsEntryPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one SavingsEntry that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {SavingsEntryFindUniqueOrThrowArgs} args - Arguments to find a SavingsEntry
     * @example
     * // Get one SavingsEntry
     * const savingsEntry = await prisma.savingsEntry.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SavingsEntryFindUniqueOrThrowArgs>(args: SelectSubset<T, SavingsEntryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SavingsEntryClient<$Result.GetResult<Prisma.$SavingsEntryPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first SavingsEntry that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavingsEntryFindFirstArgs} args - Arguments to find a SavingsEntry
     * @example
     * // Get one SavingsEntry
     * const savingsEntry = await prisma.savingsEntry.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SavingsEntryFindFirstArgs>(args?: SelectSubset<T, SavingsEntryFindFirstArgs<ExtArgs>>): Prisma__SavingsEntryClient<$Result.GetResult<Prisma.$SavingsEntryPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first SavingsEntry that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavingsEntryFindFirstOrThrowArgs} args - Arguments to find a SavingsEntry
     * @example
     * // Get one SavingsEntry
     * const savingsEntry = await prisma.savingsEntry.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SavingsEntryFindFirstOrThrowArgs>(args?: SelectSubset<T, SavingsEntryFindFirstOrThrowArgs<ExtArgs>>): Prisma__SavingsEntryClient<$Result.GetResult<Prisma.$SavingsEntryPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more SavingsEntries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavingsEntryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SavingsEntries
     * const savingsEntries = await prisma.savingsEntry.findMany()
     * 
     * // Get first 10 SavingsEntries
     * const savingsEntries = await prisma.savingsEntry.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const savingsEntryWithIdOnly = await prisma.savingsEntry.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SavingsEntryFindManyArgs>(args?: SelectSubset<T, SavingsEntryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SavingsEntryPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a SavingsEntry.
     * @param {SavingsEntryCreateArgs} args - Arguments to create a SavingsEntry.
     * @example
     * // Create one SavingsEntry
     * const SavingsEntry = await prisma.savingsEntry.create({
     *   data: {
     *     // ... data to create a SavingsEntry
     *   }
     * })
     * 
     */
    create<T extends SavingsEntryCreateArgs>(args: SelectSubset<T, SavingsEntryCreateArgs<ExtArgs>>): Prisma__SavingsEntryClient<$Result.GetResult<Prisma.$SavingsEntryPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many SavingsEntries.
     * @param {SavingsEntryCreateManyArgs} args - Arguments to create many SavingsEntries.
     * @example
     * // Create many SavingsEntries
     * const savingsEntry = await prisma.savingsEntry.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SavingsEntryCreateManyArgs>(args?: SelectSubset<T, SavingsEntryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SavingsEntries and returns the data saved in the database.
     * @param {SavingsEntryCreateManyAndReturnArgs} args - Arguments to create many SavingsEntries.
     * @example
     * // Create many SavingsEntries
     * const savingsEntry = await prisma.savingsEntry.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SavingsEntries and only return the `id`
     * const savingsEntryWithIdOnly = await prisma.savingsEntry.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SavingsEntryCreateManyAndReturnArgs>(args?: SelectSubset<T, SavingsEntryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SavingsEntryPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a SavingsEntry.
     * @param {SavingsEntryDeleteArgs} args - Arguments to delete one SavingsEntry.
     * @example
     * // Delete one SavingsEntry
     * const SavingsEntry = await prisma.savingsEntry.delete({
     *   where: {
     *     // ... filter to delete one SavingsEntry
     *   }
     * })
     * 
     */
    delete<T extends SavingsEntryDeleteArgs>(args: SelectSubset<T, SavingsEntryDeleteArgs<ExtArgs>>): Prisma__SavingsEntryClient<$Result.GetResult<Prisma.$SavingsEntryPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one SavingsEntry.
     * @param {SavingsEntryUpdateArgs} args - Arguments to update one SavingsEntry.
     * @example
     * // Update one SavingsEntry
     * const savingsEntry = await prisma.savingsEntry.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SavingsEntryUpdateArgs>(args: SelectSubset<T, SavingsEntryUpdateArgs<ExtArgs>>): Prisma__SavingsEntryClient<$Result.GetResult<Prisma.$SavingsEntryPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more SavingsEntries.
     * @param {SavingsEntryDeleteManyArgs} args - Arguments to filter SavingsEntries to delete.
     * @example
     * // Delete a few SavingsEntries
     * const { count } = await prisma.savingsEntry.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SavingsEntryDeleteManyArgs>(args?: SelectSubset<T, SavingsEntryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SavingsEntries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavingsEntryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SavingsEntries
     * const savingsEntry = await prisma.savingsEntry.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SavingsEntryUpdateManyArgs>(args: SelectSubset<T, SavingsEntryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SavingsEntry.
     * @param {SavingsEntryUpsertArgs} args - Arguments to update or create a SavingsEntry.
     * @example
     * // Update or create a SavingsEntry
     * const savingsEntry = await prisma.savingsEntry.upsert({
     *   create: {
     *     // ... data to create a SavingsEntry
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SavingsEntry we want to update
     *   }
     * })
     */
    upsert<T extends SavingsEntryUpsertArgs>(args: SelectSubset<T, SavingsEntryUpsertArgs<ExtArgs>>): Prisma__SavingsEntryClient<$Result.GetResult<Prisma.$SavingsEntryPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of SavingsEntries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavingsEntryCountArgs} args - Arguments to filter SavingsEntries to count.
     * @example
     * // Count the number of SavingsEntries
     * const count = await prisma.savingsEntry.count({
     *   where: {
     *     // ... the filter for the SavingsEntries we want to count
     *   }
     * })
    **/
    count<T extends SavingsEntryCountArgs>(
      args?: Subset<T, SavingsEntryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SavingsEntryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SavingsEntry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavingsEntryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SavingsEntryAggregateArgs>(args: Subset<T, SavingsEntryAggregateArgs>): Prisma.PrismaPromise<GetSavingsEntryAggregateType<T>>

    /**
     * Group by SavingsEntry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavingsEntryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SavingsEntryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SavingsEntryGroupByArgs['orderBy'] }
        : { orderBy?: SavingsEntryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SavingsEntryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSavingsEntryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SavingsEntry model
   */
  readonly fields: SavingsEntryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SavingsEntry.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SavingsEntryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    savings<T extends SavingsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SavingsDefaultArgs<ExtArgs>>): Prisma__SavingsClient<$Result.GetResult<Prisma.$SavingsPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SavingsEntry model
   */ 
  interface SavingsEntryFieldRefs {
    readonly id: FieldRef<"SavingsEntry", 'String'>
    readonly amount: FieldRef<"SavingsEntry", 'Float'>
    readonly date: FieldRef<"SavingsEntry", 'DateTime'>
    readonly savingsId: FieldRef<"SavingsEntry", 'String'>
  }
    

  // Custom InputTypes
  /**
   * SavingsEntry findUnique
   */
  export type SavingsEntryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavingsEntry
     */
    select?: SavingsEntrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavingsEntryInclude<ExtArgs> | null
    /**
     * Filter, which SavingsEntry to fetch.
     */
    where: SavingsEntryWhereUniqueInput
  }

  /**
   * SavingsEntry findUniqueOrThrow
   */
  export type SavingsEntryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavingsEntry
     */
    select?: SavingsEntrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavingsEntryInclude<ExtArgs> | null
    /**
     * Filter, which SavingsEntry to fetch.
     */
    where: SavingsEntryWhereUniqueInput
  }

  /**
   * SavingsEntry findFirst
   */
  export type SavingsEntryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavingsEntry
     */
    select?: SavingsEntrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavingsEntryInclude<ExtArgs> | null
    /**
     * Filter, which SavingsEntry to fetch.
     */
    where?: SavingsEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SavingsEntries to fetch.
     */
    orderBy?: SavingsEntryOrderByWithRelationInput | SavingsEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SavingsEntries.
     */
    cursor?: SavingsEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SavingsEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SavingsEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SavingsEntries.
     */
    distinct?: SavingsEntryScalarFieldEnum | SavingsEntryScalarFieldEnum[]
  }

  /**
   * SavingsEntry findFirstOrThrow
   */
  export type SavingsEntryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavingsEntry
     */
    select?: SavingsEntrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavingsEntryInclude<ExtArgs> | null
    /**
     * Filter, which SavingsEntry to fetch.
     */
    where?: SavingsEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SavingsEntries to fetch.
     */
    orderBy?: SavingsEntryOrderByWithRelationInput | SavingsEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SavingsEntries.
     */
    cursor?: SavingsEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SavingsEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SavingsEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SavingsEntries.
     */
    distinct?: SavingsEntryScalarFieldEnum | SavingsEntryScalarFieldEnum[]
  }

  /**
   * SavingsEntry findMany
   */
  export type SavingsEntryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavingsEntry
     */
    select?: SavingsEntrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavingsEntryInclude<ExtArgs> | null
    /**
     * Filter, which SavingsEntries to fetch.
     */
    where?: SavingsEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SavingsEntries to fetch.
     */
    orderBy?: SavingsEntryOrderByWithRelationInput | SavingsEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SavingsEntries.
     */
    cursor?: SavingsEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SavingsEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SavingsEntries.
     */
    skip?: number
    distinct?: SavingsEntryScalarFieldEnum | SavingsEntryScalarFieldEnum[]
  }

  /**
   * SavingsEntry create
   */
  export type SavingsEntryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavingsEntry
     */
    select?: SavingsEntrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavingsEntryInclude<ExtArgs> | null
    /**
     * The data needed to create a SavingsEntry.
     */
    data: XOR<SavingsEntryCreateInput, SavingsEntryUncheckedCreateInput>
  }

  /**
   * SavingsEntry createMany
   */
  export type SavingsEntryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SavingsEntries.
     */
    data: SavingsEntryCreateManyInput | SavingsEntryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SavingsEntry createManyAndReturn
   */
  export type SavingsEntryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavingsEntry
     */
    select?: SavingsEntrySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many SavingsEntries.
     */
    data: SavingsEntryCreateManyInput | SavingsEntryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavingsEntryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SavingsEntry update
   */
  export type SavingsEntryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavingsEntry
     */
    select?: SavingsEntrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavingsEntryInclude<ExtArgs> | null
    /**
     * The data needed to update a SavingsEntry.
     */
    data: XOR<SavingsEntryUpdateInput, SavingsEntryUncheckedUpdateInput>
    /**
     * Choose, which SavingsEntry to update.
     */
    where: SavingsEntryWhereUniqueInput
  }

  /**
   * SavingsEntry updateMany
   */
  export type SavingsEntryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SavingsEntries.
     */
    data: XOR<SavingsEntryUpdateManyMutationInput, SavingsEntryUncheckedUpdateManyInput>
    /**
     * Filter which SavingsEntries to update
     */
    where?: SavingsEntryWhereInput
  }

  /**
   * SavingsEntry upsert
   */
  export type SavingsEntryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavingsEntry
     */
    select?: SavingsEntrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavingsEntryInclude<ExtArgs> | null
    /**
     * The filter to search for the SavingsEntry to update in case it exists.
     */
    where: SavingsEntryWhereUniqueInput
    /**
     * In case the SavingsEntry found by the `where` argument doesn't exist, create a new SavingsEntry with this data.
     */
    create: XOR<SavingsEntryCreateInput, SavingsEntryUncheckedCreateInput>
    /**
     * In case the SavingsEntry was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SavingsEntryUpdateInput, SavingsEntryUncheckedUpdateInput>
  }

  /**
   * SavingsEntry delete
   */
  export type SavingsEntryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavingsEntry
     */
    select?: SavingsEntrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavingsEntryInclude<ExtArgs> | null
    /**
     * Filter which SavingsEntry to delete.
     */
    where: SavingsEntryWhereUniqueInput
  }

  /**
   * SavingsEntry deleteMany
   */
  export type SavingsEntryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SavingsEntries to delete
     */
    where?: SavingsEntryWhereInput
  }

  /**
   * SavingsEntry without action
   */
  export type SavingsEntryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavingsEntry
     */
    select?: SavingsEntrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavingsEntryInclude<ExtArgs> | null
  }


  /**
   * Model SavingsWithdrawal
   */

  export type AggregateSavingsWithdrawal = {
    _count: SavingsWithdrawalCountAggregateOutputType | null
    _avg: SavingsWithdrawalAvgAggregateOutputType | null
    _sum: SavingsWithdrawalSumAggregateOutputType | null
    _min: SavingsWithdrawalMinAggregateOutputType | null
    _max: SavingsWithdrawalMaxAggregateOutputType | null
  }

  export type SavingsWithdrawalAvgAggregateOutputType = {
    amount: number | null
  }

  export type SavingsWithdrawalSumAggregateOutputType = {
    amount: number | null
  }

  export type SavingsWithdrawalMinAggregateOutputType = {
    id: string | null
    amount: number | null
    date: Date | null
    savingsId: string | null
  }

  export type SavingsWithdrawalMaxAggregateOutputType = {
    id: string | null
    amount: number | null
    date: Date | null
    savingsId: string | null
  }

  export type SavingsWithdrawalCountAggregateOutputType = {
    id: number
    amount: number
    date: number
    savingsId: number
    _all: number
  }


  export type SavingsWithdrawalAvgAggregateInputType = {
    amount?: true
  }

  export type SavingsWithdrawalSumAggregateInputType = {
    amount?: true
  }

  export type SavingsWithdrawalMinAggregateInputType = {
    id?: true
    amount?: true
    date?: true
    savingsId?: true
  }

  export type SavingsWithdrawalMaxAggregateInputType = {
    id?: true
    amount?: true
    date?: true
    savingsId?: true
  }

  export type SavingsWithdrawalCountAggregateInputType = {
    id?: true
    amount?: true
    date?: true
    savingsId?: true
    _all?: true
  }

  export type SavingsWithdrawalAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SavingsWithdrawal to aggregate.
     */
    where?: SavingsWithdrawalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SavingsWithdrawals to fetch.
     */
    orderBy?: SavingsWithdrawalOrderByWithRelationInput | SavingsWithdrawalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SavingsWithdrawalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SavingsWithdrawals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SavingsWithdrawals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SavingsWithdrawals
    **/
    _count?: true | SavingsWithdrawalCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SavingsWithdrawalAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SavingsWithdrawalSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SavingsWithdrawalMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SavingsWithdrawalMaxAggregateInputType
  }

  export type GetSavingsWithdrawalAggregateType<T extends SavingsWithdrawalAggregateArgs> = {
        [P in keyof T & keyof AggregateSavingsWithdrawal]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSavingsWithdrawal[P]>
      : GetScalarType<T[P], AggregateSavingsWithdrawal[P]>
  }




  export type SavingsWithdrawalGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SavingsWithdrawalWhereInput
    orderBy?: SavingsWithdrawalOrderByWithAggregationInput | SavingsWithdrawalOrderByWithAggregationInput[]
    by: SavingsWithdrawalScalarFieldEnum[] | SavingsWithdrawalScalarFieldEnum
    having?: SavingsWithdrawalScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SavingsWithdrawalCountAggregateInputType | true
    _avg?: SavingsWithdrawalAvgAggregateInputType
    _sum?: SavingsWithdrawalSumAggregateInputType
    _min?: SavingsWithdrawalMinAggregateInputType
    _max?: SavingsWithdrawalMaxAggregateInputType
  }

  export type SavingsWithdrawalGroupByOutputType = {
    id: string
    amount: number
    date: Date
    savingsId: string
    _count: SavingsWithdrawalCountAggregateOutputType | null
    _avg: SavingsWithdrawalAvgAggregateOutputType | null
    _sum: SavingsWithdrawalSumAggregateOutputType | null
    _min: SavingsWithdrawalMinAggregateOutputType | null
    _max: SavingsWithdrawalMaxAggregateOutputType | null
  }

  type GetSavingsWithdrawalGroupByPayload<T extends SavingsWithdrawalGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SavingsWithdrawalGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SavingsWithdrawalGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SavingsWithdrawalGroupByOutputType[P]>
            : GetScalarType<T[P], SavingsWithdrawalGroupByOutputType[P]>
        }
      >
    >


  export type SavingsWithdrawalSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    amount?: boolean
    date?: boolean
    savingsId?: boolean
    savings?: boolean | SavingsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["savingsWithdrawal"]>

  export type SavingsWithdrawalSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    amount?: boolean
    date?: boolean
    savingsId?: boolean
    savings?: boolean | SavingsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["savingsWithdrawal"]>

  export type SavingsWithdrawalSelectScalar = {
    id?: boolean
    amount?: boolean
    date?: boolean
    savingsId?: boolean
  }

  export type SavingsWithdrawalInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    savings?: boolean | SavingsDefaultArgs<ExtArgs>
  }
  export type SavingsWithdrawalIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    savings?: boolean | SavingsDefaultArgs<ExtArgs>
  }

  export type $SavingsWithdrawalPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SavingsWithdrawal"
    objects: {
      savings: Prisma.$SavingsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      amount: number
      date: Date
      savingsId: string
    }, ExtArgs["result"]["savingsWithdrawal"]>
    composites: {}
  }

  type SavingsWithdrawalGetPayload<S extends boolean | null | undefined | SavingsWithdrawalDefaultArgs> = $Result.GetResult<Prisma.$SavingsWithdrawalPayload, S>

  type SavingsWithdrawalCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SavingsWithdrawalFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SavingsWithdrawalCountAggregateInputType | true
    }

  export interface SavingsWithdrawalDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SavingsWithdrawal'], meta: { name: 'SavingsWithdrawal' } }
    /**
     * Find zero or one SavingsWithdrawal that matches the filter.
     * @param {SavingsWithdrawalFindUniqueArgs} args - Arguments to find a SavingsWithdrawal
     * @example
     * // Get one SavingsWithdrawal
     * const savingsWithdrawal = await prisma.savingsWithdrawal.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SavingsWithdrawalFindUniqueArgs>(args: SelectSubset<T, SavingsWithdrawalFindUniqueArgs<ExtArgs>>): Prisma__SavingsWithdrawalClient<$Result.GetResult<Prisma.$SavingsWithdrawalPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one SavingsWithdrawal that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {SavingsWithdrawalFindUniqueOrThrowArgs} args - Arguments to find a SavingsWithdrawal
     * @example
     * // Get one SavingsWithdrawal
     * const savingsWithdrawal = await prisma.savingsWithdrawal.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SavingsWithdrawalFindUniqueOrThrowArgs>(args: SelectSubset<T, SavingsWithdrawalFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SavingsWithdrawalClient<$Result.GetResult<Prisma.$SavingsWithdrawalPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first SavingsWithdrawal that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavingsWithdrawalFindFirstArgs} args - Arguments to find a SavingsWithdrawal
     * @example
     * // Get one SavingsWithdrawal
     * const savingsWithdrawal = await prisma.savingsWithdrawal.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SavingsWithdrawalFindFirstArgs>(args?: SelectSubset<T, SavingsWithdrawalFindFirstArgs<ExtArgs>>): Prisma__SavingsWithdrawalClient<$Result.GetResult<Prisma.$SavingsWithdrawalPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first SavingsWithdrawal that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavingsWithdrawalFindFirstOrThrowArgs} args - Arguments to find a SavingsWithdrawal
     * @example
     * // Get one SavingsWithdrawal
     * const savingsWithdrawal = await prisma.savingsWithdrawal.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SavingsWithdrawalFindFirstOrThrowArgs>(args?: SelectSubset<T, SavingsWithdrawalFindFirstOrThrowArgs<ExtArgs>>): Prisma__SavingsWithdrawalClient<$Result.GetResult<Prisma.$SavingsWithdrawalPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more SavingsWithdrawals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavingsWithdrawalFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SavingsWithdrawals
     * const savingsWithdrawals = await prisma.savingsWithdrawal.findMany()
     * 
     * // Get first 10 SavingsWithdrawals
     * const savingsWithdrawals = await prisma.savingsWithdrawal.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const savingsWithdrawalWithIdOnly = await prisma.savingsWithdrawal.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SavingsWithdrawalFindManyArgs>(args?: SelectSubset<T, SavingsWithdrawalFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SavingsWithdrawalPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a SavingsWithdrawal.
     * @param {SavingsWithdrawalCreateArgs} args - Arguments to create a SavingsWithdrawal.
     * @example
     * // Create one SavingsWithdrawal
     * const SavingsWithdrawal = await prisma.savingsWithdrawal.create({
     *   data: {
     *     // ... data to create a SavingsWithdrawal
     *   }
     * })
     * 
     */
    create<T extends SavingsWithdrawalCreateArgs>(args: SelectSubset<T, SavingsWithdrawalCreateArgs<ExtArgs>>): Prisma__SavingsWithdrawalClient<$Result.GetResult<Prisma.$SavingsWithdrawalPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many SavingsWithdrawals.
     * @param {SavingsWithdrawalCreateManyArgs} args - Arguments to create many SavingsWithdrawals.
     * @example
     * // Create many SavingsWithdrawals
     * const savingsWithdrawal = await prisma.savingsWithdrawal.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SavingsWithdrawalCreateManyArgs>(args?: SelectSubset<T, SavingsWithdrawalCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SavingsWithdrawals and returns the data saved in the database.
     * @param {SavingsWithdrawalCreateManyAndReturnArgs} args - Arguments to create many SavingsWithdrawals.
     * @example
     * // Create many SavingsWithdrawals
     * const savingsWithdrawal = await prisma.savingsWithdrawal.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SavingsWithdrawals and only return the `id`
     * const savingsWithdrawalWithIdOnly = await prisma.savingsWithdrawal.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SavingsWithdrawalCreateManyAndReturnArgs>(args?: SelectSubset<T, SavingsWithdrawalCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SavingsWithdrawalPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a SavingsWithdrawal.
     * @param {SavingsWithdrawalDeleteArgs} args - Arguments to delete one SavingsWithdrawal.
     * @example
     * // Delete one SavingsWithdrawal
     * const SavingsWithdrawal = await prisma.savingsWithdrawal.delete({
     *   where: {
     *     // ... filter to delete one SavingsWithdrawal
     *   }
     * })
     * 
     */
    delete<T extends SavingsWithdrawalDeleteArgs>(args: SelectSubset<T, SavingsWithdrawalDeleteArgs<ExtArgs>>): Prisma__SavingsWithdrawalClient<$Result.GetResult<Prisma.$SavingsWithdrawalPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one SavingsWithdrawal.
     * @param {SavingsWithdrawalUpdateArgs} args - Arguments to update one SavingsWithdrawal.
     * @example
     * // Update one SavingsWithdrawal
     * const savingsWithdrawal = await prisma.savingsWithdrawal.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SavingsWithdrawalUpdateArgs>(args: SelectSubset<T, SavingsWithdrawalUpdateArgs<ExtArgs>>): Prisma__SavingsWithdrawalClient<$Result.GetResult<Prisma.$SavingsWithdrawalPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more SavingsWithdrawals.
     * @param {SavingsWithdrawalDeleteManyArgs} args - Arguments to filter SavingsWithdrawals to delete.
     * @example
     * // Delete a few SavingsWithdrawals
     * const { count } = await prisma.savingsWithdrawal.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SavingsWithdrawalDeleteManyArgs>(args?: SelectSubset<T, SavingsWithdrawalDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SavingsWithdrawals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavingsWithdrawalUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SavingsWithdrawals
     * const savingsWithdrawal = await prisma.savingsWithdrawal.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SavingsWithdrawalUpdateManyArgs>(args: SelectSubset<T, SavingsWithdrawalUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SavingsWithdrawal.
     * @param {SavingsWithdrawalUpsertArgs} args - Arguments to update or create a SavingsWithdrawal.
     * @example
     * // Update or create a SavingsWithdrawal
     * const savingsWithdrawal = await prisma.savingsWithdrawal.upsert({
     *   create: {
     *     // ... data to create a SavingsWithdrawal
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SavingsWithdrawal we want to update
     *   }
     * })
     */
    upsert<T extends SavingsWithdrawalUpsertArgs>(args: SelectSubset<T, SavingsWithdrawalUpsertArgs<ExtArgs>>): Prisma__SavingsWithdrawalClient<$Result.GetResult<Prisma.$SavingsWithdrawalPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of SavingsWithdrawals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavingsWithdrawalCountArgs} args - Arguments to filter SavingsWithdrawals to count.
     * @example
     * // Count the number of SavingsWithdrawals
     * const count = await prisma.savingsWithdrawal.count({
     *   where: {
     *     // ... the filter for the SavingsWithdrawals we want to count
     *   }
     * })
    **/
    count<T extends SavingsWithdrawalCountArgs>(
      args?: Subset<T, SavingsWithdrawalCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SavingsWithdrawalCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SavingsWithdrawal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavingsWithdrawalAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SavingsWithdrawalAggregateArgs>(args: Subset<T, SavingsWithdrawalAggregateArgs>): Prisma.PrismaPromise<GetSavingsWithdrawalAggregateType<T>>

    /**
     * Group by SavingsWithdrawal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavingsWithdrawalGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SavingsWithdrawalGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SavingsWithdrawalGroupByArgs['orderBy'] }
        : { orderBy?: SavingsWithdrawalGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SavingsWithdrawalGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSavingsWithdrawalGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SavingsWithdrawal model
   */
  readonly fields: SavingsWithdrawalFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SavingsWithdrawal.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SavingsWithdrawalClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    savings<T extends SavingsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SavingsDefaultArgs<ExtArgs>>): Prisma__SavingsClient<$Result.GetResult<Prisma.$SavingsPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SavingsWithdrawal model
   */ 
  interface SavingsWithdrawalFieldRefs {
    readonly id: FieldRef<"SavingsWithdrawal", 'String'>
    readonly amount: FieldRef<"SavingsWithdrawal", 'Float'>
    readonly date: FieldRef<"SavingsWithdrawal", 'DateTime'>
    readonly savingsId: FieldRef<"SavingsWithdrawal", 'String'>
  }
    

  // Custom InputTypes
  /**
   * SavingsWithdrawal findUnique
   */
  export type SavingsWithdrawalFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavingsWithdrawal
     */
    select?: SavingsWithdrawalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavingsWithdrawalInclude<ExtArgs> | null
    /**
     * Filter, which SavingsWithdrawal to fetch.
     */
    where: SavingsWithdrawalWhereUniqueInput
  }

  /**
   * SavingsWithdrawal findUniqueOrThrow
   */
  export type SavingsWithdrawalFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavingsWithdrawal
     */
    select?: SavingsWithdrawalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavingsWithdrawalInclude<ExtArgs> | null
    /**
     * Filter, which SavingsWithdrawal to fetch.
     */
    where: SavingsWithdrawalWhereUniqueInput
  }

  /**
   * SavingsWithdrawal findFirst
   */
  export type SavingsWithdrawalFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavingsWithdrawal
     */
    select?: SavingsWithdrawalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavingsWithdrawalInclude<ExtArgs> | null
    /**
     * Filter, which SavingsWithdrawal to fetch.
     */
    where?: SavingsWithdrawalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SavingsWithdrawals to fetch.
     */
    orderBy?: SavingsWithdrawalOrderByWithRelationInput | SavingsWithdrawalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SavingsWithdrawals.
     */
    cursor?: SavingsWithdrawalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SavingsWithdrawals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SavingsWithdrawals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SavingsWithdrawals.
     */
    distinct?: SavingsWithdrawalScalarFieldEnum | SavingsWithdrawalScalarFieldEnum[]
  }

  /**
   * SavingsWithdrawal findFirstOrThrow
   */
  export type SavingsWithdrawalFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavingsWithdrawal
     */
    select?: SavingsWithdrawalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavingsWithdrawalInclude<ExtArgs> | null
    /**
     * Filter, which SavingsWithdrawal to fetch.
     */
    where?: SavingsWithdrawalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SavingsWithdrawals to fetch.
     */
    orderBy?: SavingsWithdrawalOrderByWithRelationInput | SavingsWithdrawalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SavingsWithdrawals.
     */
    cursor?: SavingsWithdrawalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SavingsWithdrawals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SavingsWithdrawals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SavingsWithdrawals.
     */
    distinct?: SavingsWithdrawalScalarFieldEnum | SavingsWithdrawalScalarFieldEnum[]
  }

  /**
   * SavingsWithdrawal findMany
   */
  export type SavingsWithdrawalFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavingsWithdrawal
     */
    select?: SavingsWithdrawalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavingsWithdrawalInclude<ExtArgs> | null
    /**
     * Filter, which SavingsWithdrawals to fetch.
     */
    where?: SavingsWithdrawalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SavingsWithdrawals to fetch.
     */
    orderBy?: SavingsWithdrawalOrderByWithRelationInput | SavingsWithdrawalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SavingsWithdrawals.
     */
    cursor?: SavingsWithdrawalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SavingsWithdrawals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SavingsWithdrawals.
     */
    skip?: number
    distinct?: SavingsWithdrawalScalarFieldEnum | SavingsWithdrawalScalarFieldEnum[]
  }

  /**
   * SavingsWithdrawal create
   */
  export type SavingsWithdrawalCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavingsWithdrawal
     */
    select?: SavingsWithdrawalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavingsWithdrawalInclude<ExtArgs> | null
    /**
     * The data needed to create a SavingsWithdrawal.
     */
    data: XOR<SavingsWithdrawalCreateInput, SavingsWithdrawalUncheckedCreateInput>
  }

  /**
   * SavingsWithdrawal createMany
   */
  export type SavingsWithdrawalCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SavingsWithdrawals.
     */
    data: SavingsWithdrawalCreateManyInput | SavingsWithdrawalCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SavingsWithdrawal createManyAndReturn
   */
  export type SavingsWithdrawalCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavingsWithdrawal
     */
    select?: SavingsWithdrawalSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many SavingsWithdrawals.
     */
    data: SavingsWithdrawalCreateManyInput | SavingsWithdrawalCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavingsWithdrawalIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SavingsWithdrawal update
   */
  export type SavingsWithdrawalUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavingsWithdrawal
     */
    select?: SavingsWithdrawalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavingsWithdrawalInclude<ExtArgs> | null
    /**
     * The data needed to update a SavingsWithdrawal.
     */
    data: XOR<SavingsWithdrawalUpdateInput, SavingsWithdrawalUncheckedUpdateInput>
    /**
     * Choose, which SavingsWithdrawal to update.
     */
    where: SavingsWithdrawalWhereUniqueInput
  }

  /**
   * SavingsWithdrawal updateMany
   */
  export type SavingsWithdrawalUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SavingsWithdrawals.
     */
    data: XOR<SavingsWithdrawalUpdateManyMutationInput, SavingsWithdrawalUncheckedUpdateManyInput>
    /**
     * Filter which SavingsWithdrawals to update
     */
    where?: SavingsWithdrawalWhereInput
  }

  /**
   * SavingsWithdrawal upsert
   */
  export type SavingsWithdrawalUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavingsWithdrawal
     */
    select?: SavingsWithdrawalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavingsWithdrawalInclude<ExtArgs> | null
    /**
     * The filter to search for the SavingsWithdrawal to update in case it exists.
     */
    where: SavingsWithdrawalWhereUniqueInput
    /**
     * In case the SavingsWithdrawal found by the `where` argument doesn't exist, create a new SavingsWithdrawal with this data.
     */
    create: XOR<SavingsWithdrawalCreateInput, SavingsWithdrawalUncheckedCreateInput>
    /**
     * In case the SavingsWithdrawal was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SavingsWithdrawalUpdateInput, SavingsWithdrawalUncheckedUpdateInput>
  }

  /**
   * SavingsWithdrawal delete
   */
  export type SavingsWithdrawalDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavingsWithdrawal
     */
    select?: SavingsWithdrawalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavingsWithdrawalInclude<ExtArgs> | null
    /**
     * Filter which SavingsWithdrawal to delete.
     */
    where: SavingsWithdrawalWhereUniqueInput
  }

  /**
   * SavingsWithdrawal deleteMany
   */
  export type SavingsWithdrawalDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SavingsWithdrawals to delete
     */
    where?: SavingsWithdrawalWhereInput
  }

  /**
   * SavingsWithdrawal without action
   */
  export type SavingsWithdrawalDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavingsWithdrawal
     */
    select?: SavingsWithdrawalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavingsWithdrawalInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const FamilyScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type FamilyScalarFieldEnum = (typeof FamilyScalarFieldEnum)[keyof typeof FamilyScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    totalMoney: 'totalMoney',
    familyId: 'familyId'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const CardScalarFieldEnum: {
    id: 'id',
    name: 'name',
    lastFourNumbers: 'lastFourNumbers',
    invoiceClosingDay: 'invoiceClosingDay',
    invoiceAmount: 'invoiceAmount',
    creditLimit: 'creditLimit',
    dueDate: 'dueDate',
    userId: 'userId'
  };

  export type CardScalarFieldEnum = (typeof CardScalarFieldEnum)[keyof typeof CardScalarFieldEnum]


  export const ExpenseScalarFieldEnum: {
    id: 'id',
    name: 'name',
    amount: 'amount',
    type: 'type',
    paymentMethod: 'paymentMethod',
    category: 'category',
    description: 'description',
    date: 'date',
    userId: 'userId'
  };

  export type ExpenseScalarFieldEnum = (typeof ExpenseScalarFieldEnum)[keyof typeof ExpenseScalarFieldEnum]


  export const IncomeScalarFieldEnum: {
    id: 'id',
    name: 'name',
    amount: 'amount',
    category: 'category',
    date: 'date',
    userId: 'userId'
  };

  export type IncomeScalarFieldEnum = (typeof IncomeScalarFieldEnum)[keyof typeof IncomeScalarFieldEnum]


  export const SavingsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    totalAmount: 'totalAmount',
    userId: 'userId'
  };

  export type SavingsScalarFieldEnum = (typeof SavingsScalarFieldEnum)[keyof typeof SavingsScalarFieldEnum]


  export const SavingsEntryScalarFieldEnum: {
    id: 'id',
    amount: 'amount',
    date: 'date',
    savingsId: 'savingsId'
  };

  export type SavingsEntryScalarFieldEnum = (typeof SavingsEntryScalarFieldEnum)[keyof typeof SavingsEntryScalarFieldEnum]


  export const SavingsWithdrawalScalarFieldEnum: {
    id: 'id',
    amount: 'amount',
    date: 'date',
    savingsId: 'savingsId'
  };

  export type SavingsWithdrawalScalarFieldEnum = (typeof SavingsWithdrawalScalarFieldEnum)[keyof typeof SavingsWithdrawalScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'ExpenseType'
   */
  export type EnumExpenseTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ExpenseType'>
    


  /**
   * Reference to a field of type 'ExpenseType[]'
   */
  export type ListEnumExpenseTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ExpenseType[]'>
    


  /**
   * Reference to a field of type 'PaymentMethod'
   */
  export type EnumPaymentMethodFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentMethod'>
    


  /**
   * Reference to a field of type 'PaymentMethod[]'
   */
  export type ListEnumPaymentMethodFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentMethod[]'>
    


  /**
   * Reference to a field of type 'ExpenseCategory'
   */
  export type EnumExpenseCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ExpenseCategory'>
    


  /**
   * Reference to a field of type 'ExpenseCategory[]'
   */
  export type ListEnumExpenseCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ExpenseCategory[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'IncomeCategory'
   */
  export type EnumIncomeCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'IncomeCategory'>
    


  /**
   * Reference to a field of type 'IncomeCategory[]'
   */
  export type ListEnumIncomeCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'IncomeCategory[]'>
    
  /**
   * Deep Input Types
   */


  export type FamilyWhereInput = {
    AND?: FamilyWhereInput | FamilyWhereInput[]
    OR?: FamilyWhereInput[]
    NOT?: FamilyWhereInput | FamilyWhereInput[]
    id?: StringFilter<"Family"> | string
    name?: StringFilter<"Family"> | string
    users?: UserListRelationFilter
  }

  export type FamilyOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    users?: UserOrderByRelationAggregateInput
  }

  export type FamilyWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FamilyWhereInput | FamilyWhereInput[]
    OR?: FamilyWhereInput[]
    NOT?: FamilyWhereInput | FamilyWhereInput[]
    name?: StringFilter<"Family"> | string
    users?: UserListRelationFilter
  }, "id">

  export type FamilyOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: FamilyCountOrderByAggregateInput
    _max?: FamilyMaxOrderByAggregateInput
    _min?: FamilyMinOrderByAggregateInput
  }

  export type FamilyScalarWhereWithAggregatesInput = {
    AND?: FamilyScalarWhereWithAggregatesInput | FamilyScalarWhereWithAggregatesInput[]
    OR?: FamilyScalarWhereWithAggregatesInput[]
    NOT?: FamilyScalarWhereWithAggregatesInput | FamilyScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Family"> | string
    name?: StringWithAggregatesFilter<"Family"> | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    totalMoney?: FloatFilter<"User"> | number
    familyId?: StringNullableFilter<"User"> | string | null
    expenses?: ExpenseListRelationFilter
    cards?: CardListRelationFilter
    incomes?: IncomeListRelationFilter
    savings?: SavingsListRelationFilter
    family?: XOR<FamilyNullableRelationFilter, FamilyWhereInput> | null
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    totalMoney?: SortOrder
    familyId?: SortOrderInput | SortOrder
    expenses?: ExpenseOrderByRelationAggregateInput
    cards?: CardOrderByRelationAggregateInput
    incomes?: IncomeOrderByRelationAggregateInput
    savings?: SavingsOrderByRelationAggregateInput
    family?: FamilyOrderByWithRelationInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    totalMoney?: FloatFilter<"User"> | number
    familyId?: StringNullableFilter<"User"> | string | null
    expenses?: ExpenseListRelationFilter
    cards?: CardListRelationFilter
    incomes?: IncomeListRelationFilter
    savings?: SavingsListRelationFilter
    family?: XOR<FamilyNullableRelationFilter, FamilyWhereInput> | null
  }, "id">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    totalMoney?: SortOrder
    familyId?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    totalMoney?: FloatWithAggregatesFilter<"User"> | number
    familyId?: StringNullableWithAggregatesFilter<"User"> | string | null
  }

  export type CardWhereInput = {
    AND?: CardWhereInput | CardWhereInput[]
    OR?: CardWhereInput[]
    NOT?: CardWhereInput | CardWhereInput[]
    id?: StringFilter<"Card"> | string
    name?: StringFilter<"Card"> | string
    lastFourNumbers?: StringFilter<"Card"> | string
    invoiceClosingDay?: IntFilter<"Card"> | number
    invoiceAmount?: FloatFilter<"Card"> | number
    creditLimit?: FloatFilter<"Card"> | number
    dueDate?: IntFilter<"Card"> | number
    userId?: StringFilter<"Card"> | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type CardOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    lastFourNumbers?: SortOrder
    invoiceClosingDay?: SortOrder
    invoiceAmount?: SortOrder
    creditLimit?: SortOrder
    dueDate?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type CardWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CardWhereInput | CardWhereInput[]
    OR?: CardWhereInput[]
    NOT?: CardWhereInput | CardWhereInput[]
    name?: StringFilter<"Card"> | string
    lastFourNumbers?: StringFilter<"Card"> | string
    invoiceClosingDay?: IntFilter<"Card"> | number
    invoiceAmount?: FloatFilter<"Card"> | number
    creditLimit?: FloatFilter<"Card"> | number
    dueDate?: IntFilter<"Card"> | number
    userId?: StringFilter<"Card"> | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id">

  export type CardOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    lastFourNumbers?: SortOrder
    invoiceClosingDay?: SortOrder
    invoiceAmount?: SortOrder
    creditLimit?: SortOrder
    dueDate?: SortOrder
    userId?: SortOrder
    _count?: CardCountOrderByAggregateInput
    _avg?: CardAvgOrderByAggregateInput
    _max?: CardMaxOrderByAggregateInput
    _min?: CardMinOrderByAggregateInput
    _sum?: CardSumOrderByAggregateInput
  }

  export type CardScalarWhereWithAggregatesInput = {
    AND?: CardScalarWhereWithAggregatesInput | CardScalarWhereWithAggregatesInput[]
    OR?: CardScalarWhereWithAggregatesInput[]
    NOT?: CardScalarWhereWithAggregatesInput | CardScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Card"> | string
    name?: StringWithAggregatesFilter<"Card"> | string
    lastFourNumbers?: StringWithAggregatesFilter<"Card"> | string
    invoiceClosingDay?: IntWithAggregatesFilter<"Card"> | number
    invoiceAmount?: FloatWithAggregatesFilter<"Card"> | number
    creditLimit?: FloatWithAggregatesFilter<"Card"> | number
    dueDate?: IntWithAggregatesFilter<"Card"> | number
    userId?: StringWithAggregatesFilter<"Card"> | string
  }

  export type ExpenseWhereInput = {
    AND?: ExpenseWhereInput | ExpenseWhereInput[]
    OR?: ExpenseWhereInput[]
    NOT?: ExpenseWhereInput | ExpenseWhereInput[]
    id?: StringFilter<"Expense"> | string
    name?: StringFilter<"Expense"> | string
    amount?: FloatFilter<"Expense"> | number
    type?: EnumExpenseTypeFilter<"Expense"> | $Enums.ExpenseType
    paymentMethod?: EnumPaymentMethodFilter<"Expense"> | $Enums.PaymentMethod
    category?: EnumExpenseCategoryFilter<"Expense"> | $Enums.ExpenseCategory
    description?: StringFilter<"Expense"> | string
    date?: DateTimeFilter<"Expense"> | Date | string
    userId?: StringFilter<"Expense"> | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type ExpenseOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    amount?: SortOrder
    type?: SortOrder
    paymentMethod?: SortOrder
    category?: SortOrder
    description?: SortOrder
    date?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type ExpenseWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ExpenseWhereInput | ExpenseWhereInput[]
    OR?: ExpenseWhereInput[]
    NOT?: ExpenseWhereInput | ExpenseWhereInput[]
    name?: StringFilter<"Expense"> | string
    amount?: FloatFilter<"Expense"> | number
    type?: EnumExpenseTypeFilter<"Expense"> | $Enums.ExpenseType
    paymentMethod?: EnumPaymentMethodFilter<"Expense"> | $Enums.PaymentMethod
    category?: EnumExpenseCategoryFilter<"Expense"> | $Enums.ExpenseCategory
    description?: StringFilter<"Expense"> | string
    date?: DateTimeFilter<"Expense"> | Date | string
    userId?: StringFilter<"Expense"> | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id">

  export type ExpenseOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    amount?: SortOrder
    type?: SortOrder
    paymentMethod?: SortOrder
    category?: SortOrder
    description?: SortOrder
    date?: SortOrder
    userId?: SortOrder
    _count?: ExpenseCountOrderByAggregateInput
    _avg?: ExpenseAvgOrderByAggregateInput
    _max?: ExpenseMaxOrderByAggregateInput
    _min?: ExpenseMinOrderByAggregateInput
    _sum?: ExpenseSumOrderByAggregateInput
  }

  export type ExpenseScalarWhereWithAggregatesInput = {
    AND?: ExpenseScalarWhereWithAggregatesInput | ExpenseScalarWhereWithAggregatesInput[]
    OR?: ExpenseScalarWhereWithAggregatesInput[]
    NOT?: ExpenseScalarWhereWithAggregatesInput | ExpenseScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Expense"> | string
    name?: StringWithAggregatesFilter<"Expense"> | string
    amount?: FloatWithAggregatesFilter<"Expense"> | number
    type?: EnumExpenseTypeWithAggregatesFilter<"Expense"> | $Enums.ExpenseType
    paymentMethod?: EnumPaymentMethodWithAggregatesFilter<"Expense"> | $Enums.PaymentMethod
    category?: EnumExpenseCategoryWithAggregatesFilter<"Expense"> | $Enums.ExpenseCategory
    description?: StringWithAggregatesFilter<"Expense"> | string
    date?: DateTimeWithAggregatesFilter<"Expense"> | Date | string
    userId?: StringWithAggregatesFilter<"Expense"> | string
  }

  export type IncomeWhereInput = {
    AND?: IncomeWhereInput | IncomeWhereInput[]
    OR?: IncomeWhereInput[]
    NOT?: IncomeWhereInput | IncomeWhereInput[]
    id?: StringFilter<"Income"> | string
    name?: StringFilter<"Income"> | string
    amount?: FloatFilter<"Income"> | number
    category?: EnumIncomeCategoryFilter<"Income"> | $Enums.IncomeCategory
    date?: DateTimeFilter<"Income"> | Date | string
    userId?: StringFilter<"Income"> | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type IncomeOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    amount?: SortOrder
    category?: SortOrder
    date?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type IncomeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: IncomeWhereInput | IncomeWhereInput[]
    OR?: IncomeWhereInput[]
    NOT?: IncomeWhereInput | IncomeWhereInput[]
    name?: StringFilter<"Income"> | string
    amount?: FloatFilter<"Income"> | number
    category?: EnumIncomeCategoryFilter<"Income"> | $Enums.IncomeCategory
    date?: DateTimeFilter<"Income"> | Date | string
    userId?: StringFilter<"Income"> | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id">

  export type IncomeOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    amount?: SortOrder
    category?: SortOrder
    date?: SortOrder
    userId?: SortOrder
    _count?: IncomeCountOrderByAggregateInput
    _avg?: IncomeAvgOrderByAggregateInput
    _max?: IncomeMaxOrderByAggregateInput
    _min?: IncomeMinOrderByAggregateInput
    _sum?: IncomeSumOrderByAggregateInput
  }

  export type IncomeScalarWhereWithAggregatesInput = {
    AND?: IncomeScalarWhereWithAggregatesInput | IncomeScalarWhereWithAggregatesInput[]
    OR?: IncomeScalarWhereWithAggregatesInput[]
    NOT?: IncomeScalarWhereWithAggregatesInput | IncomeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Income"> | string
    name?: StringWithAggregatesFilter<"Income"> | string
    amount?: FloatWithAggregatesFilter<"Income"> | number
    category?: EnumIncomeCategoryWithAggregatesFilter<"Income"> | $Enums.IncomeCategory
    date?: DateTimeWithAggregatesFilter<"Income"> | Date | string
    userId?: StringWithAggregatesFilter<"Income"> | string
  }

  export type SavingsWhereInput = {
    AND?: SavingsWhereInput | SavingsWhereInput[]
    OR?: SavingsWhereInput[]
    NOT?: SavingsWhereInput | SavingsWhereInput[]
    id?: StringFilter<"Savings"> | string
    name?: StringFilter<"Savings"> | string
    totalAmount?: FloatFilter<"Savings"> | number
    userId?: StringFilter<"Savings"> | string
    entries?: SavingsEntryListRelationFilter
    withdrawals?: SavingsWithdrawalListRelationFilter
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type SavingsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    totalAmount?: SortOrder
    userId?: SortOrder
    entries?: SavingsEntryOrderByRelationAggregateInput
    withdrawals?: SavingsWithdrawalOrderByRelationAggregateInput
    user?: UserOrderByWithRelationInput
  }

  export type SavingsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SavingsWhereInput | SavingsWhereInput[]
    OR?: SavingsWhereInput[]
    NOT?: SavingsWhereInput | SavingsWhereInput[]
    name?: StringFilter<"Savings"> | string
    totalAmount?: FloatFilter<"Savings"> | number
    userId?: StringFilter<"Savings"> | string
    entries?: SavingsEntryListRelationFilter
    withdrawals?: SavingsWithdrawalListRelationFilter
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id">

  export type SavingsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    totalAmount?: SortOrder
    userId?: SortOrder
    _count?: SavingsCountOrderByAggregateInput
    _avg?: SavingsAvgOrderByAggregateInput
    _max?: SavingsMaxOrderByAggregateInput
    _min?: SavingsMinOrderByAggregateInput
    _sum?: SavingsSumOrderByAggregateInput
  }

  export type SavingsScalarWhereWithAggregatesInput = {
    AND?: SavingsScalarWhereWithAggregatesInput | SavingsScalarWhereWithAggregatesInput[]
    OR?: SavingsScalarWhereWithAggregatesInput[]
    NOT?: SavingsScalarWhereWithAggregatesInput | SavingsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Savings"> | string
    name?: StringWithAggregatesFilter<"Savings"> | string
    totalAmount?: FloatWithAggregatesFilter<"Savings"> | number
    userId?: StringWithAggregatesFilter<"Savings"> | string
  }

  export type SavingsEntryWhereInput = {
    AND?: SavingsEntryWhereInput | SavingsEntryWhereInput[]
    OR?: SavingsEntryWhereInput[]
    NOT?: SavingsEntryWhereInput | SavingsEntryWhereInput[]
    id?: StringFilter<"SavingsEntry"> | string
    amount?: FloatFilter<"SavingsEntry"> | number
    date?: DateTimeFilter<"SavingsEntry"> | Date | string
    savingsId?: StringFilter<"SavingsEntry"> | string
    savings?: XOR<SavingsRelationFilter, SavingsWhereInput>
  }

  export type SavingsEntryOrderByWithRelationInput = {
    id?: SortOrder
    amount?: SortOrder
    date?: SortOrder
    savingsId?: SortOrder
    savings?: SavingsOrderByWithRelationInput
  }

  export type SavingsEntryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SavingsEntryWhereInput | SavingsEntryWhereInput[]
    OR?: SavingsEntryWhereInput[]
    NOT?: SavingsEntryWhereInput | SavingsEntryWhereInput[]
    amount?: FloatFilter<"SavingsEntry"> | number
    date?: DateTimeFilter<"SavingsEntry"> | Date | string
    savingsId?: StringFilter<"SavingsEntry"> | string
    savings?: XOR<SavingsRelationFilter, SavingsWhereInput>
  }, "id">

  export type SavingsEntryOrderByWithAggregationInput = {
    id?: SortOrder
    amount?: SortOrder
    date?: SortOrder
    savingsId?: SortOrder
    _count?: SavingsEntryCountOrderByAggregateInput
    _avg?: SavingsEntryAvgOrderByAggregateInput
    _max?: SavingsEntryMaxOrderByAggregateInput
    _min?: SavingsEntryMinOrderByAggregateInput
    _sum?: SavingsEntrySumOrderByAggregateInput
  }

  export type SavingsEntryScalarWhereWithAggregatesInput = {
    AND?: SavingsEntryScalarWhereWithAggregatesInput | SavingsEntryScalarWhereWithAggregatesInput[]
    OR?: SavingsEntryScalarWhereWithAggregatesInput[]
    NOT?: SavingsEntryScalarWhereWithAggregatesInput | SavingsEntryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SavingsEntry"> | string
    amount?: FloatWithAggregatesFilter<"SavingsEntry"> | number
    date?: DateTimeWithAggregatesFilter<"SavingsEntry"> | Date | string
    savingsId?: StringWithAggregatesFilter<"SavingsEntry"> | string
  }

  export type SavingsWithdrawalWhereInput = {
    AND?: SavingsWithdrawalWhereInput | SavingsWithdrawalWhereInput[]
    OR?: SavingsWithdrawalWhereInput[]
    NOT?: SavingsWithdrawalWhereInput | SavingsWithdrawalWhereInput[]
    id?: StringFilter<"SavingsWithdrawal"> | string
    amount?: FloatFilter<"SavingsWithdrawal"> | number
    date?: DateTimeFilter<"SavingsWithdrawal"> | Date | string
    savingsId?: StringFilter<"SavingsWithdrawal"> | string
    savings?: XOR<SavingsRelationFilter, SavingsWhereInput>
  }

  export type SavingsWithdrawalOrderByWithRelationInput = {
    id?: SortOrder
    amount?: SortOrder
    date?: SortOrder
    savingsId?: SortOrder
    savings?: SavingsOrderByWithRelationInput
  }

  export type SavingsWithdrawalWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SavingsWithdrawalWhereInput | SavingsWithdrawalWhereInput[]
    OR?: SavingsWithdrawalWhereInput[]
    NOT?: SavingsWithdrawalWhereInput | SavingsWithdrawalWhereInput[]
    amount?: FloatFilter<"SavingsWithdrawal"> | number
    date?: DateTimeFilter<"SavingsWithdrawal"> | Date | string
    savingsId?: StringFilter<"SavingsWithdrawal"> | string
    savings?: XOR<SavingsRelationFilter, SavingsWhereInput>
  }, "id">

  export type SavingsWithdrawalOrderByWithAggregationInput = {
    id?: SortOrder
    amount?: SortOrder
    date?: SortOrder
    savingsId?: SortOrder
    _count?: SavingsWithdrawalCountOrderByAggregateInput
    _avg?: SavingsWithdrawalAvgOrderByAggregateInput
    _max?: SavingsWithdrawalMaxOrderByAggregateInput
    _min?: SavingsWithdrawalMinOrderByAggregateInput
    _sum?: SavingsWithdrawalSumOrderByAggregateInput
  }

  export type SavingsWithdrawalScalarWhereWithAggregatesInput = {
    AND?: SavingsWithdrawalScalarWhereWithAggregatesInput | SavingsWithdrawalScalarWhereWithAggregatesInput[]
    OR?: SavingsWithdrawalScalarWhereWithAggregatesInput[]
    NOT?: SavingsWithdrawalScalarWhereWithAggregatesInput | SavingsWithdrawalScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SavingsWithdrawal"> | string
    amount?: FloatWithAggregatesFilter<"SavingsWithdrawal"> | number
    date?: DateTimeWithAggregatesFilter<"SavingsWithdrawal"> | Date | string
    savingsId?: StringWithAggregatesFilter<"SavingsWithdrawal"> | string
  }

  export type FamilyCreateInput = {
    id?: string
    name: string
    users?: UserCreateNestedManyWithoutFamilyInput
  }

  export type FamilyUncheckedCreateInput = {
    id?: string
    name: string
    users?: UserUncheckedCreateNestedManyWithoutFamilyInput
  }

  export type FamilyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    users?: UserUpdateManyWithoutFamilyNestedInput
  }

  export type FamilyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    users?: UserUncheckedUpdateManyWithoutFamilyNestedInput
  }

  export type FamilyCreateManyInput = {
    id?: string
    name: string
  }

  export type FamilyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type FamilyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type UserCreateInput = {
    id?: string
    name: string
    totalMoney: number
    expenses?: ExpenseCreateNestedManyWithoutUserInput
    cards?: CardCreateNestedManyWithoutUserInput
    incomes?: IncomeCreateNestedManyWithoutUserInput
    savings?: SavingsCreateNestedManyWithoutUserInput
    family?: FamilyCreateNestedOneWithoutUsersInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    totalMoney: number
    familyId?: string | null
    expenses?: ExpenseUncheckedCreateNestedManyWithoutUserInput
    cards?: CardUncheckedCreateNestedManyWithoutUserInput
    incomes?: IncomeUncheckedCreateNestedManyWithoutUserInput
    savings?: SavingsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    totalMoney?: FloatFieldUpdateOperationsInput | number
    expenses?: ExpenseUpdateManyWithoutUserNestedInput
    cards?: CardUpdateManyWithoutUserNestedInput
    incomes?: IncomeUpdateManyWithoutUserNestedInput
    savings?: SavingsUpdateManyWithoutUserNestedInput
    family?: FamilyUpdateOneWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    totalMoney?: FloatFieldUpdateOperationsInput | number
    familyId?: NullableStringFieldUpdateOperationsInput | string | null
    expenses?: ExpenseUncheckedUpdateManyWithoutUserNestedInput
    cards?: CardUncheckedUpdateManyWithoutUserNestedInput
    incomes?: IncomeUncheckedUpdateManyWithoutUserNestedInput
    savings?: SavingsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    totalMoney: number
    familyId?: string | null
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    totalMoney?: FloatFieldUpdateOperationsInput | number
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    totalMoney?: FloatFieldUpdateOperationsInput | number
    familyId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CardCreateInput = {
    id?: string
    name: string
    lastFourNumbers: string
    invoiceClosingDay: number
    invoiceAmount: number
    creditLimit: number
    dueDate: number
    user: UserCreateNestedOneWithoutCardsInput
  }

  export type CardUncheckedCreateInput = {
    id?: string
    name: string
    lastFourNumbers: string
    invoiceClosingDay: number
    invoiceAmount: number
    creditLimit: number
    dueDate: number
    userId: string
  }

  export type CardUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    lastFourNumbers?: StringFieldUpdateOperationsInput | string
    invoiceClosingDay?: IntFieldUpdateOperationsInput | number
    invoiceAmount?: FloatFieldUpdateOperationsInput | number
    creditLimit?: FloatFieldUpdateOperationsInput | number
    dueDate?: IntFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutCardsNestedInput
  }

  export type CardUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    lastFourNumbers?: StringFieldUpdateOperationsInput | string
    invoiceClosingDay?: IntFieldUpdateOperationsInput | number
    invoiceAmount?: FloatFieldUpdateOperationsInput | number
    creditLimit?: FloatFieldUpdateOperationsInput | number
    dueDate?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type CardCreateManyInput = {
    id?: string
    name: string
    lastFourNumbers: string
    invoiceClosingDay: number
    invoiceAmount: number
    creditLimit: number
    dueDate: number
    userId: string
  }

  export type CardUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    lastFourNumbers?: StringFieldUpdateOperationsInput | string
    invoiceClosingDay?: IntFieldUpdateOperationsInput | number
    invoiceAmount?: FloatFieldUpdateOperationsInput | number
    creditLimit?: FloatFieldUpdateOperationsInput | number
    dueDate?: IntFieldUpdateOperationsInput | number
  }

  export type CardUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    lastFourNumbers?: StringFieldUpdateOperationsInput | string
    invoiceClosingDay?: IntFieldUpdateOperationsInput | number
    invoiceAmount?: FloatFieldUpdateOperationsInput | number
    creditLimit?: FloatFieldUpdateOperationsInput | number
    dueDate?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type ExpenseCreateInput = {
    id?: string
    name: string
    amount: number
    type: $Enums.ExpenseType
    paymentMethod: $Enums.PaymentMethod
    category: $Enums.ExpenseCategory
    description: string
    date: Date | string
    user: UserCreateNestedOneWithoutExpensesInput
  }

  export type ExpenseUncheckedCreateInput = {
    id?: string
    name: string
    amount: number
    type: $Enums.ExpenseType
    paymentMethod: $Enums.PaymentMethod
    category: $Enums.ExpenseCategory
    description: string
    date: Date | string
    userId: string
  }

  export type ExpenseUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    type?: EnumExpenseTypeFieldUpdateOperationsInput | $Enums.ExpenseType
    paymentMethod?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    category?: EnumExpenseCategoryFieldUpdateOperationsInput | $Enums.ExpenseCategory
    description?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutExpensesNestedInput
  }

  export type ExpenseUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    type?: EnumExpenseTypeFieldUpdateOperationsInput | $Enums.ExpenseType
    paymentMethod?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    category?: EnumExpenseCategoryFieldUpdateOperationsInput | $Enums.ExpenseCategory
    description?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type ExpenseCreateManyInput = {
    id?: string
    name: string
    amount: number
    type: $Enums.ExpenseType
    paymentMethod: $Enums.PaymentMethod
    category: $Enums.ExpenseCategory
    description: string
    date: Date | string
    userId: string
  }

  export type ExpenseUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    type?: EnumExpenseTypeFieldUpdateOperationsInput | $Enums.ExpenseType
    paymentMethod?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    category?: EnumExpenseCategoryFieldUpdateOperationsInput | $Enums.ExpenseCategory
    description?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExpenseUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    type?: EnumExpenseTypeFieldUpdateOperationsInput | $Enums.ExpenseType
    paymentMethod?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    category?: EnumExpenseCategoryFieldUpdateOperationsInput | $Enums.ExpenseCategory
    description?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type IncomeCreateInput = {
    id?: string
    name: string
    amount: number
    category: $Enums.IncomeCategory
    date: Date | string
    user: UserCreateNestedOneWithoutIncomesInput
  }

  export type IncomeUncheckedCreateInput = {
    id?: string
    name: string
    amount: number
    category: $Enums.IncomeCategory
    date: Date | string
    userId: string
  }

  export type IncomeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    category?: EnumIncomeCategoryFieldUpdateOperationsInput | $Enums.IncomeCategory
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutIncomesNestedInput
  }

  export type IncomeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    category?: EnumIncomeCategoryFieldUpdateOperationsInput | $Enums.IncomeCategory
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type IncomeCreateManyInput = {
    id?: string
    name: string
    amount: number
    category: $Enums.IncomeCategory
    date: Date | string
    userId: string
  }

  export type IncomeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    category?: EnumIncomeCategoryFieldUpdateOperationsInput | $Enums.IncomeCategory
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IncomeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    category?: EnumIncomeCategoryFieldUpdateOperationsInput | $Enums.IncomeCategory
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type SavingsCreateInput = {
    id?: string
    name: string
    totalAmount: number
    entries?: SavingsEntryCreateNestedManyWithoutSavingsInput
    withdrawals?: SavingsWithdrawalCreateNestedManyWithoutSavingsInput
    user: UserCreateNestedOneWithoutSavingsInput
  }

  export type SavingsUncheckedCreateInput = {
    id?: string
    name: string
    totalAmount: number
    userId: string
    entries?: SavingsEntryUncheckedCreateNestedManyWithoutSavingsInput
    withdrawals?: SavingsWithdrawalUncheckedCreateNestedManyWithoutSavingsInput
  }

  export type SavingsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    totalAmount?: FloatFieldUpdateOperationsInput | number
    entries?: SavingsEntryUpdateManyWithoutSavingsNestedInput
    withdrawals?: SavingsWithdrawalUpdateManyWithoutSavingsNestedInput
    user?: UserUpdateOneRequiredWithoutSavingsNestedInput
  }

  export type SavingsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    totalAmount?: FloatFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    entries?: SavingsEntryUncheckedUpdateManyWithoutSavingsNestedInput
    withdrawals?: SavingsWithdrawalUncheckedUpdateManyWithoutSavingsNestedInput
  }

  export type SavingsCreateManyInput = {
    id?: string
    name: string
    totalAmount: number
    userId: string
  }

  export type SavingsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    totalAmount?: FloatFieldUpdateOperationsInput | number
  }

  export type SavingsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    totalAmount?: FloatFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type SavingsEntryCreateInput = {
    id?: string
    amount: number
    date: Date | string
    savings: SavingsCreateNestedOneWithoutEntriesInput
  }

  export type SavingsEntryUncheckedCreateInput = {
    id?: string
    amount: number
    date: Date | string
    savingsId: string
  }

  export type SavingsEntryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    savings?: SavingsUpdateOneRequiredWithoutEntriesNestedInput
  }

  export type SavingsEntryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    savingsId?: StringFieldUpdateOperationsInput | string
  }

  export type SavingsEntryCreateManyInput = {
    id?: string
    amount: number
    date: Date | string
    savingsId: string
  }

  export type SavingsEntryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SavingsEntryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    savingsId?: StringFieldUpdateOperationsInput | string
  }

  export type SavingsWithdrawalCreateInput = {
    id?: string
    amount: number
    date: Date | string
    savings: SavingsCreateNestedOneWithoutWithdrawalsInput
  }

  export type SavingsWithdrawalUncheckedCreateInput = {
    id?: string
    amount: number
    date: Date | string
    savingsId: string
  }

  export type SavingsWithdrawalUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    savings?: SavingsUpdateOneRequiredWithoutWithdrawalsNestedInput
  }

  export type SavingsWithdrawalUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    savingsId?: StringFieldUpdateOperationsInput | string
  }

  export type SavingsWithdrawalCreateManyInput = {
    id?: string
    amount: number
    date: Date | string
    savingsId: string
  }

  export type SavingsWithdrawalUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SavingsWithdrawalUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    savingsId?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FamilyCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type FamilyMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type FamilyMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type ExpenseListRelationFilter = {
    every?: ExpenseWhereInput
    some?: ExpenseWhereInput
    none?: ExpenseWhereInput
  }

  export type CardListRelationFilter = {
    every?: CardWhereInput
    some?: CardWhereInput
    none?: CardWhereInput
  }

  export type IncomeListRelationFilter = {
    every?: IncomeWhereInput
    some?: IncomeWhereInput
    none?: IncomeWhereInput
  }

  export type SavingsListRelationFilter = {
    every?: SavingsWhereInput
    some?: SavingsWhereInput
    none?: SavingsWhereInput
  }

  export type FamilyNullableRelationFilter = {
    is?: FamilyWhereInput | null
    isNot?: FamilyWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ExpenseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CardOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type IncomeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SavingsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    totalMoney?: SortOrder
    familyId?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    totalMoney?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    totalMoney?: SortOrder
    familyId?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    totalMoney?: SortOrder
    familyId?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    totalMoney?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type CardCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    lastFourNumbers?: SortOrder
    invoiceClosingDay?: SortOrder
    invoiceAmount?: SortOrder
    creditLimit?: SortOrder
    dueDate?: SortOrder
    userId?: SortOrder
  }

  export type CardAvgOrderByAggregateInput = {
    invoiceClosingDay?: SortOrder
    invoiceAmount?: SortOrder
    creditLimit?: SortOrder
    dueDate?: SortOrder
  }

  export type CardMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    lastFourNumbers?: SortOrder
    invoiceClosingDay?: SortOrder
    invoiceAmount?: SortOrder
    creditLimit?: SortOrder
    dueDate?: SortOrder
    userId?: SortOrder
  }

  export type CardMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    lastFourNumbers?: SortOrder
    invoiceClosingDay?: SortOrder
    invoiceAmount?: SortOrder
    creditLimit?: SortOrder
    dueDate?: SortOrder
    userId?: SortOrder
  }

  export type CardSumOrderByAggregateInput = {
    invoiceClosingDay?: SortOrder
    invoiceAmount?: SortOrder
    creditLimit?: SortOrder
    dueDate?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type EnumExpenseTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ExpenseType | EnumExpenseTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ExpenseType[] | ListEnumExpenseTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ExpenseType[] | ListEnumExpenseTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumExpenseTypeFilter<$PrismaModel> | $Enums.ExpenseType
  }

  export type EnumPaymentMethodFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentMethod | EnumPaymentMethodFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentMethodFilter<$PrismaModel> | $Enums.PaymentMethod
  }

  export type EnumExpenseCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.ExpenseCategory | EnumExpenseCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.ExpenseCategory[] | ListEnumExpenseCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.ExpenseCategory[] | ListEnumExpenseCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumExpenseCategoryFilter<$PrismaModel> | $Enums.ExpenseCategory
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type ExpenseCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    amount?: SortOrder
    type?: SortOrder
    paymentMethod?: SortOrder
    category?: SortOrder
    description?: SortOrder
    date?: SortOrder
    userId?: SortOrder
  }

  export type ExpenseAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type ExpenseMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    amount?: SortOrder
    type?: SortOrder
    paymentMethod?: SortOrder
    category?: SortOrder
    description?: SortOrder
    date?: SortOrder
    userId?: SortOrder
  }

  export type ExpenseMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    amount?: SortOrder
    type?: SortOrder
    paymentMethod?: SortOrder
    category?: SortOrder
    description?: SortOrder
    date?: SortOrder
    userId?: SortOrder
  }

  export type ExpenseSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type EnumExpenseTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ExpenseType | EnumExpenseTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ExpenseType[] | ListEnumExpenseTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ExpenseType[] | ListEnumExpenseTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumExpenseTypeWithAggregatesFilter<$PrismaModel> | $Enums.ExpenseType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumExpenseTypeFilter<$PrismaModel>
    _max?: NestedEnumExpenseTypeFilter<$PrismaModel>
  }

  export type EnumPaymentMethodWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentMethod | EnumPaymentMethodFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentMethodWithAggregatesFilter<$PrismaModel> | $Enums.PaymentMethod
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentMethodFilter<$PrismaModel>
    _max?: NestedEnumPaymentMethodFilter<$PrismaModel>
  }

  export type EnumExpenseCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ExpenseCategory | EnumExpenseCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.ExpenseCategory[] | ListEnumExpenseCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.ExpenseCategory[] | ListEnumExpenseCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumExpenseCategoryWithAggregatesFilter<$PrismaModel> | $Enums.ExpenseCategory
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumExpenseCategoryFilter<$PrismaModel>
    _max?: NestedEnumExpenseCategoryFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumIncomeCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.IncomeCategory | EnumIncomeCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.IncomeCategory[] | ListEnumIncomeCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.IncomeCategory[] | ListEnumIncomeCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumIncomeCategoryFilter<$PrismaModel> | $Enums.IncomeCategory
  }

  export type IncomeCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    amount?: SortOrder
    category?: SortOrder
    date?: SortOrder
    userId?: SortOrder
  }

  export type IncomeAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type IncomeMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    amount?: SortOrder
    category?: SortOrder
    date?: SortOrder
    userId?: SortOrder
  }

  export type IncomeMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    amount?: SortOrder
    category?: SortOrder
    date?: SortOrder
    userId?: SortOrder
  }

  export type IncomeSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type EnumIncomeCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.IncomeCategory | EnumIncomeCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.IncomeCategory[] | ListEnumIncomeCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.IncomeCategory[] | ListEnumIncomeCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumIncomeCategoryWithAggregatesFilter<$PrismaModel> | $Enums.IncomeCategory
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumIncomeCategoryFilter<$PrismaModel>
    _max?: NestedEnumIncomeCategoryFilter<$PrismaModel>
  }

  export type SavingsEntryListRelationFilter = {
    every?: SavingsEntryWhereInput
    some?: SavingsEntryWhereInput
    none?: SavingsEntryWhereInput
  }

  export type SavingsWithdrawalListRelationFilter = {
    every?: SavingsWithdrawalWhereInput
    some?: SavingsWithdrawalWhereInput
    none?: SavingsWithdrawalWhereInput
  }

  export type SavingsEntryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SavingsWithdrawalOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SavingsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    totalAmount?: SortOrder
    userId?: SortOrder
  }

  export type SavingsAvgOrderByAggregateInput = {
    totalAmount?: SortOrder
  }

  export type SavingsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    totalAmount?: SortOrder
    userId?: SortOrder
  }

  export type SavingsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    totalAmount?: SortOrder
    userId?: SortOrder
  }

  export type SavingsSumOrderByAggregateInput = {
    totalAmount?: SortOrder
  }

  export type SavingsRelationFilter = {
    is?: SavingsWhereInput
    isNot?: SavingsWhereInput
  }

  export type SavingsEntryCountOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    date?: SortOrder
    savingsId?: SortOrder
  }

  export type SavingsEntryAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type SavingsEntryMaxOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    date?: SortOrder
    savingsId?: SortOrder
  }

  export type SavingsEntryMinOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    date?: SortOrder
    savingsId?: SortOrder
  }

  export type SavingsEntrySumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type SavingsWithdrawalCountOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    date?: SortOrder
    savingsId?: SortOrder
  }

  export type SavingsWithdrawalAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type SavingsWithdrawalMaxOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    date?: SortOrder
    savingsId?: SortOrder
  }

  export type SavingsWithdrawalMinOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    date?: SortOrder
    savingsId?: SortOrder
  }

  export type SavingsWithdrawalSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type UserCreateNestedManyWithoutFamilyInput = {
    create?: XOR<UserCreateWithoutFamilyInput, UserUncheckedCreateWithoutFamilyInput> | UserCreateWithoutFamilyInput[] | UserUncheckedCreateWithoutFamilyInput[]
    connectOrCreate?: UserCreateOrConnectWithoutFamilyInput | UserCreateOrConnectWithoutFamilyInput[]
    createMany?: UserCreateManyFamilyInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutFamilyInput = {
    create?: XOR<UserCreateWithoutFamilyInput, UserUncheckedCreateWithoutFamilyInput> | UserCreateWithoutFamilyInput[] | UserUncheckedCreateWithoutFamilyInput[]
    connectOrCreate?: UserCreateOrConnectWithoutFamilyInput | UserCreateOrConnectWithoutFamilyInput[]
    createMany?: UserCreateManyFamilyInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type UserUpdateManyWithoutFamilyNestedInput = {
    create?: XOR<UserCreateWithoutFamilyInput, UserUncheckedCreateWithoutFamilyInput> | UserCreateWithoutFamilyInput[] | UserUncheckedCreateWithoutFamilyInput[]
    connectOrCreate?: UserCreateOrConnectWithoutFamilyInput | UserCreateOrConnectWithoutFamilyInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutFamilyInput | UserUpsertWithWhereUniqueWithoutFamilyInput[]
    createMany?: UserCreateManyFamilyInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutFamilyInput | UserUpdateWithWhereUniqueWithoutFamilyInput[]
    updateMany?: UserUpdateManyWithWhereWithoutFamilyInput | UserUpdateManyWithWhereWithoutFamilyInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutFamilyNestedInput = {
    create?: XOR<UserCreateWithoutFamilyInput, UserUncheckedCreateWithoutFamilyInput> | UserCreateWithoutFamilyInput[] | UserUncheckedCreateWithoutFamilyInput[]
    connectOrCreate?: UserCreateOrConnectWithoutFamilyInput | UserCreateOrConnectWithoutFamilyInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutFamilyInput | UserUpsertWithWhereUniqueWithoutFamilyInput[]
    createMany?: UserCreateManyFamilyInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutFamilyInput | UserUpdateWithWhereUniqueWithoutFamilyInput[]
    updateMany?: UserUpdateManyWithWhereWithoutFamilyInput | UserUpdateManyWithWhereWithoutFamilyInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type ExpenseCreateNestedManyWithoutUserInput = {
    create?: XOR<ExpenseCreateWithoutUserInput, ExpenseUncheckedCreateWithoutUserInput> | ExpenseCreateWithoutUserInput[] | ExpenseUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ExpenseCreateOrConnectWithoutUserInput | ExpenseCreateOrConnectWithoutUserInput[]
    createMany?: ExpenseCreateManyUserInputEnvelope
    connect?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
  }

  export type CardCreateNestedManyWithoutUserInput = {
    create?: XOR<CardCreateWithoutUserInput, CardUncheckedCreateWithoutUserInput> | CardCreateWithoutUserInput[] | CardUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CardCreateOrConnectWithoutUserInput | CardCreateOrConnectWithoutUserInput[]
    createMany?: CardCreateManyUserInputEnvelope
    connect?: CardWhereUniqueInput | CardWhereUniqueInput[]
  }

  export type IncomeCreateNestedManyWithoutUserInput = {
    create?: XOR<IncomeCreateWithoutUserInput, IncomeUncheckedCreateWithoutUserInput> | IncomeCreateWithoutUserInput[] | IncomeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: IncomeCreateOrConnectWithoutUserInput | IncomeCreateOrConnectWithoutUserInput[]
    createMany?: IncomeCreateManyUserInputEnvelope
    connect?: IncomeWhereUniqueInput | IncomeWhereUniqueInput[]
  }

  export type SavingsCreateNestedManyWithoutUserInput = {
    create?: XOR<SavingsCreateWithoutUserInput, SavingsUncheckedCreateWithoutUserInput> | SavingsCreateWithoutUserInput[] | SavingsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SavingsCreateOrConnectWithoutUserInput | SavingsCreateOrConnectWithoutUserInput[]
    createMany?: SavingsCreateManyUserInputEnvelope
    connect?: SavingsWhereUniqueInput | SavingsWhereUniqueInput[]
  }

  export type FamilyCreateNestedOneWithoutUsersInput = {
    create?: XOR<FamilyCreateWithoutUsersInput, FamilyUncheckedCreateWithoutUsersInput>
    connectOrCreate?: FamilyCreateOrConnectWithoutUsersInput
    connect?: FamilyWhereUniqueInput
  }

  export type ExpenseUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ExpenseCreateWithoutUserInput, ExpenseUncheckedCreateWithoutUserInput> | ExpenseCreateWithoutUserInput[] | ExpenseUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ExpenseCreateOrConnectWithoutUserInput | ExpenseCreateOrConnectWithoutUserInput[]
    createMany?: ExpenseCreateManyUserInputEnvelope
    connect?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
  }

  export type CardUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<CardCreateWithoutUserInput, CardUncheckedCreateWithoutUserInput> | CardCreateWithoutUserInput[] | CardUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CardCreateOrConnectWithoutUserInput | CardCreateOrConnectWithoutUserInput[]
    createMany?: CardCreateManyUserInputEnvelope
    connect?: CardWhereUniqueInput | CardWhereUniqueInput[]
  }

  export type IncomeUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<IncomeCreateWithoutUserInput, IncomeUncheckedCreateWithoutUserInput> | IncomeCreateWithoutUserInput[] | IncomeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: IncomeCreateOrConnectWithoutUserInput | IncomeCreateOrConnectWithoutUserInput[]
    createMany?: IncomeCreateManyUserInputEnvelope
    connect?: IncomeWhereUniqueInput | IncomeWhereUniqueInput[]
  }

  export type SavingsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SavingsCreateWithoutUserInput, SavingsUncheckedCreateWithoutUserInput> | SavingsCreateWithoutUserInput[] | SavingsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SavingsCreateOrConnectWithoutUserInput | SavingsCreateOrConnectWithoutUserInput[]
    createMany?: SavingsCreateManyUserInputEnvelope
    connect?: SavingsWhereUniqueInput | SavingsWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ExpenseUpdateManyWithoutUserNestedInput = {
    create?: XOR<ExpenseCreateWithoutUserInput, ExpenseUncheckedCreateWithoutUserInput> | ExpenseCreateWithoutUserInput[] | ExpenseUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ExpenseCreateOrConnectWithoutUserInput | ExpenseCreateOrConnectWithoutUserInput[]
    upsert?: ExpenseUpsertWithWhereUniqueWithoutUserInput | ExpenseUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ExpenseCreateManyUserInputEnvelope
    set?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    disconnect?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    delete?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    connect?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    update?: ExpenseUpdateWithWhereUniqueWithoutUserInput | ExpenseUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ExpenseUpdateManyWithWhereWithoutUserInput | ExpenseUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ExpenseScalarWhereInput | ExpenseScalarWhereInput[]
  }

  export type CardUpdateManyWithoutUserNestedInput = {
    create?: XOR<CardCreateWithoutUserInput, CardUncheckedCreateWithoutUserInput> | CardCreateWithoutUserInput[] | CardUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CardCreateOrConnectWithoutUserInput | CardCreateOrConnectWithoutUserInput[]
    upsert?: CardUpsertWithWhereUniqueWithoutUserInput | CardUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CardCreateManyUserInputEnvelope
    set?: CardWhereUniqueInput | CardWhereUniqueInput[]
    disconnect?: CardWhereUniqueInput | CardWhereUniqueInput[]
    delete?: CardWhereUniqueInput | CardWhereUniqueInput[]
    connect?: CardWhereUniqueInput | CardWhereUniqueInput[]
    update?: CardUpdateWithWhereUniqueWithoutUserInput | CardUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CardUpdateManyWithWhereWithoutUserInput | CardUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CardScalarWhereInput | CardScalarWhereInput[]
  }

  export type IncomeUpdateManyWithoutUserNestedInput = {
    create?: XOR<IncomeCreateWithoutUserInput, IncomeUncheckedCreateWithoutUserInput> | IncomeCreateWithoutUserInput[] | IncomeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: IncomeCreateOrConnectWithoutUserInput | IncomeCreateOrConnectWithoutUserInput[]
    upsert?: IncomeUpsertWithWhereUniqueWithoutUserInput | IncomeUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: IncomeCreateManyUserInputEnvelope
    set?: IncomeWhereUniqueInput | IncomeWhereUniqueInput[]
    disconnect?: IncomeWhereUniqueInput | IncomeWhereUniqueInput[]
    delete?: IncomeWhereUniqueInput | IncomeWhereUniqueInput[]
    connect?: IncomeWhereUniqueInput | IncomeWhereUniqueInput[]
    update?: IncomeUpdateWithWhereUniqueWithoutUserInput | IncomeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: IncomeUpdateManyWithWhereWithoutUserInput | IncomeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: IncomeScalarWhereInput | IncomeScalarWhereInput[]
  }

  export type SavingsUpdateManyWithoutUserNestedInput = {
    create?: XOR<SavingsCreateWithoutUserInput, SavingsUncheckedCreateWithoutUserInput> | SavingsCreateWithoutUserInput[] | SavingsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SavingsCreateOrConnectWithoutUserInput | SavingsCreateOrConnectWithoutUserInput[]
    upsert?: SavingsUpsertWithWhereUniqueWithoutUserInput | SavingsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SavingsCreateManyUserInputEnvelope
    set?: SavingsWhereUniqueInput | SavingsWhereUniqueInput[]
    disconnect?: SavingsWhereUniqueInput | SavingsWhereUniqueInput[]
    delete?: SavingsWhereUniqueInput | SavingsWhereUniqueInput[]
    connect?: SavingsWhereUniqueInput | SavingsWhereUniqueInput[]
    update?: SavingsUpdateWithWhereUniqueWithoutUserInput | SavingsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SavingsUpdateManyWithWhereWithoutUserInput | SavingsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SavingsScalarWhereInput | SavingsScalarWhereInput[]
  }

  export type FamilyUpdateOneWithoutUsersNestedInput = {
    create?: XOR<FamilyCreateWithoutUsersInput, FamilyUncheckedCreateWithoutUsersInput>
    connectOrCreate?: FamilyCreateOrConnectWithoutUsersInput
    upsert?: FamilyUpsertWithoutUsersInput
    disconnect?: FamilyWhereInput | boolean
    delete?: FamilyWhereInput | boolean
    connect?: FamilyWhereUniqueInput
    update?: XOR<XOR<FamilyUpdateToOneWithWhereWithoutUsersInput, FamilyUpdateWithoutUsersInput>, FamilyUncheckedUpdateWithoutUsersInput>
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type ExpenseUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ExpenseCreateWithoutUserInput, ExpenseUncheckedCreateWithoutUserInput> | ExpenseCreateWithoutUserInput[] | ExpenseUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ExpenseCreateOrConnectWithoutUserInput | ExpenseCreateOrConnectWithoutUserInput[]
    upsert?: ExpenseUpsertWithWhereUniqueWithoutUserInput | ExpenseUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ExpenseCreateManyUserInputEnvelope
    set?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    disconnect?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    delete?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    connect?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    update?: ExpenseUpdateWithWhereUniqueWithoutUserInput | ExpenseUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ExpenseUpdateManyWithWhereWithoutUserInput | ExpenseUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ExpenseScalarWhereInput | ExpenseScalarWhereInput[]
  }

  export type CardUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<CardCreateWithoutUserInput, CardUncheckedCreateWithoutUserInput> | CardCreateWithoutUserInput[] | CardUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CardCreateOrConnectWithoutUserInput | CardCreateOrConnectWithoutUserInput[]
    upsert?: CardUpsertWithWhereUniqueWithoutUserInput | CardUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CardCreateManyUserInputEnvelope
    set?: CardWhereUniqueInput | CardWhereUniqueInput[]
    disconnect?: CardWhereUniqueInput | CardWhereUniqueInput[]
    delete?: CardWhereUniqueInput | CardWhereUniqueInput[]
    connect?: CardWhereUniqueInput | CardWhereUniqueInput[]
    update?: CardUpdateWithWhereUniqueWithoutUserInput | CardUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CardUpdateManyWithWhereWithoutUserInput | CardUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CardScalarWhereInput | CardScalarWhereInput[]
  }

  export type IncomeUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<IncomeCreateWithoutUserInput, IncomeUncheckedCreateWithoutUserInput> | IncomeCreateWithoutUserInput[] | IncomeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: IncomeCreateOrConnectWithoutUserInput | IncomeCreateOrConnectWithoutUserInput[]
    upsert?: IncomeUpsertWithWhereUniqueWithoutUserInput | IncomeUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: IncomeCreateManyUserInputEnvelope
    set?: IncomeWhereUniqueInput | IncomeWhereUniqueInput[]
    disconnect?: IncomeWhereUniqueInput | IncomeWhereUniqueInput[]
    delete?: IncomeWhereUniqueInput | IncomeWhereUniqueInput[]
    connect?: IncomeWhereUniqueInput | IncomeWhereUniqueInput[]
    update?: IncomeUpdateWithWhereUniqueWithoutUserInput | IncomeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: IncomeUpdateManyWithWhereWithoutUserInput | IncomeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: IncomeScalarWhereInput | IncomeScalarWhereInput[]
  }

  export type SavingsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SavingsCreateWithoutUserInput, SavingsUncheckedCreateWithoutUserInput> | SavingsCreateWithoutUserInput[] | SavingsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SavingsCreateOrConnectWithoutUserInput | SavingsCreateOrConnectWithoutUserInput[]
    upsert?: SavingsUpsertWithWhereUniqueWithoutUserInput | SavingsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SavingsCreateManyUserInputEnvelope
    set?: SavingsWhereUniqueInput | SavingsWhereUniqueInput[]
    disconnect?: SavingsWhereUniqueInput | SavingsWhereUniqueInput[]
    delete?: SavingsWhereUniqueInput | SavingsWhereUniqueInput[]
    connect?: SavingsWhereUniqueInput | SavingsWhereUniqueInput[]
    update?: SavingsUpdateWithWhereUniqueWithoutUserInput | SavingsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SavingsUpdateManyWithWhereWithoutUserInput | SavingsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SavingsScalarWhereInput | SavingsScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutCardsInput = {
    create?: XOR<UserCreateWithoutCardsInput, UserUncheckedCreateWithoutCardsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCardsInput
    connect?: UserWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutCardsNestedInput = {
    create?: XOR<UserCreateWithoutCardsInput, UserUncheckedCreateWithoutCardsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCardsInput
    upsert?: UserUpsertWithoutCardsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCardsInput, UserUpdateWithoutCardsInput>, UserUncheckedUpdateWithoutCardsInput>
  }

  export type UserCreateNestedOneWithoutExpensesInput = {
    create?: XOR<UserCreateWithoutExpensesInput, UserUncheckedCreateWithoutExpensesInput>
    connectOrCreate?: UserCreateOrConnectWithoutExpensesInput
    connect?: UserWhereUniqueInput
  }

  export type EnumExpenseTypeFieldUpdateOperationsInput = {
    set?: $Enums.ExpenseType
  }

  export type EnumPaymentMethodFieldUpdateOperationsInput = {
    set?: $Enums.PaymentMethod
  }

  export type EnumExpenseCategoryFieldUpdateOperationsInput = {
    set?: $Enums.ExpenseCategory
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserUpdateOneRequiredWithoutExpensesNestedInput = {
    create?: XOR<UserCreateWithoutExpensesInput, UserUncheckedCreateWithoutExpensesInput>
    connectOrCreate?: UserCreateOrConnectWithoutExpensesInput
    upsert?: UserUpsertWithoutExpensesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutExpensesInput, UserUpdateWithoutExpensesInput>, UserUncheckedUpdateWithoutExpensesInput>
  }

  export type UserCreateNestedOneWithoutIncomesInput = {
    create?: XOR<UserCreateWithoutIncomesInput, UserUncheckedCreateWithoutIncomesInput>
    connectOrCreate?: UserCreateOrConnectWithoutIncomesInput
    connect?: UserWhereUniqueInput
  }

  export type EnumIncomeCategoryFieldUpdateOperationsInput = {
    set?: $Enums.IncomeCategory
  }

  export type UserUpdateOneRequiredWithoutIncomesNestedInput = {
    create?: XOR<UserCreateWithoutIncomesInput, UserUncheckedCreateWithoutIncomesInput>
    connectOrCreate?: UserCreateOrConnectWithoutIncomesInput
    upsert?: UserUpsertWithoutIncomesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutIncomesInput, UserUpdateWithoutIncomesInput>, UserUncheckedUpdateWithoutIncomesInput>
  }

  export type SavingsEntryCreateNestedManyWithoutSavingsInput = {
    create?: XOR<SavingsEntryCreateWithoutSavingsInput, SavingsEntryUncheckedCreateWithoutSavingsInput> | SavingsEntryCreateWithoutSavingsInput[] | SavingsEntryUncheckedCreateWithoutSavingsInput[]
    connectOrCreate?: SavingsEntryCreateOrConnectWithoutSavingsInput | SavingsEntryCreateOrConnectWithoutSavingsInput[]
    createMany?: SavingsEntryCreateManySavingsInputEnvelope
    connect?: SavingsEntryWhereUniqueInput | SavingsEntryWhereUniqueInput[]
  }

  export type SavingsWithdrawalCreateNestedManyWithoutSavingsInput = {
    create?: XOR<SavingsWithdrawalCreateWithoutSavingsInput, SavingsWithdrawalUncheckedCreateWithoutSavingsInput> | SavingsWithdrawalCreateWithoutSavingsInput[] | SavingsWithdrawalUncheckedCreateWithoutSavingsInput[]
    connectOrCreate?: SavingsWithdrawalCreateOrConnectWithoutSavingsInput | SavingsWithdrawalCreateOrConnectWithoutSavingsInput[]
    createMany?: SavingsWithdrawalCreateManySavingsInputEnvelope
    connect?: SavingsWithdrawalWhereUniqueInput | SavingsWithdrawalWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutSavingsInput = {
    create?: XOR<UserCreateWithoutSavingsInput, UserUncheckedCreateWithoutSavingsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSavingsInput
    connect?: UserWhereUniqueInput
  }

  export type SavingsEntryUncheckedCreateNestedManyWithoutSavingsInput = {
    create?: XOR<SavingsEntryCreateWithoutSavingsInput, SavingsEntryUncheckedCreateWithoutSavingsInput> | SavingsEntryCreateWithoutSavingsInput[] | SavingsEntryUncheckedCreateWithoutSavingsInput[]
    connectOrCreate?: SavingsEntryCreateOrConnectWithoutSavingsInput | SavingsEntryCreateOrConnectWithoutSavingsInput[]
    createMany?: SavingsEntryCreateManySavingsInputEnvelope
    connect?: SavingsEntryWhereUniqueInput | SavingsEntryWhereUniqueInput[]
  }

  export type SavingsWithdrawalUncheckedCreateNestedManyWithoutSavingsInput = {
    create?: XOR<SavingsWithdrawalCreateWithoutSavingsInput, SavingsWithdrawalUncheckedCreateWithoutSavingsInput> | SavingsWithdrawalCreateWithoutSavingsInput[] | SavingsWithdrawalUncheckedCreateWithoutSavingsInput[]
    connectOrCreate?: SavingsWithdrawalCreateOrConnectWithoutSavingsInput | SavingsWithdrawalCreateOrConnectWithoutSavingsInput[]
    createMany?: SavingsWithdrawalCreateManySavingsInputEnvelope
    connect?: SavingsWithdrawalWhereUniqueInput | SavingsWithdrawalWhereUniqueInput[]
  }

  export type SavingsEntryUpdateManyWithoutSavingsNestedInput = {
    create?: XOR<SavingsEntryCreateWithoutSavingsInput, SavingsEntryUncheckedCreateWithoutSavingsInput> | SavingsEntryCreateWithoutSavingsInput[] | SavingsEntryUncheckedCreateWithoutSavingsInput[]
    connectOrCreate?: SavingsEntryCreateOrConnectWithoutSavingsInput | SavingsEntryCreateOrConnectWithoutSavingsInput[]
    upsert?: SavingsEntryUpsertWithWhereUniqueWithoutSavingsInput | SavingsEntryUpsertWithWhereUniqueWithoutSavingsInput[]
    createMany?: SavingsEntryCreateManySavingsInputEnvelope
    set?: SavingsEntryWhereUniqueInput | SavingsEntryWhereUniqueInput[]
    disconnect?: SavingsEntryWhereUniqueInput | SavingsEntryWhereUniqueInput[]
    delete?: SavingsEntryWhereUniqueInput | SavingsEntryWhereUniqueInput[]
    connect?: SavingsEntryWhereUniqueInput | SavingsEntryWhereUniqueInput[]
    update?: SavingsEntryUpdateWithWhereUniqueWithoutSavingsInput | SavingsEntryUpdateWithWhereUniqueWithoutSavingsInput[]
    updateMany?: SavingsEntryUpdateManyWithWhereWithoutSavingsInput | SavingsEntryUpdateManyWithWhereWithoutSavingsInput[]
    deleteMany?: SavingsEntryScalarWhereInput | SavingsEntryScalarWhereInput[]
  }

  export type SavingsWithdrawalUpdateManyWithoutSavingsNestedInput = {
    create?: XOR<SavingsWithdrawalCreateWithoutSavingsInput, SavingsWithdrawalUncheckedCreateWithoutSavingsInput> | SavingsWithdrawalCreateWithoutSavingsInput[] | SavingsWithdrawalUncheckedCreateWithoutSavingsInput[]
    connectOrCreate?: SavingsWithdrawalCreateOrConnectWithoutSavingsInput | SavingsWithdrawalCreateOrConnectWithoutSavingsInput[]
    upsert?: SavingsWithdrawalUpsertWithWhereUniqueWithoutSavingsInput | SavingsWithdrawalUpsertWithWhereUniqueWithoutSavingsInput[]
    createMany?: SavingsWithdrawalCreateManySavingsInputEnvelope
    set?: SavingsWithdrawalWhereUniqueInput | SavingsWithdrawalWhereUniqueInput[]
    disconnect?: SavingsWithdrawalWhereUniqueInput | SavingsWithdrawalWhereUniqueInput[]
    delete?: SavingsWithdrawalWhereUniqueInput | SavingsWithdrawalWhereUniqueInput[]
    connect?: SavingsWithdrawalWhereUniqueInput | SavingsWithdrawalWhereUniqueInput[]
    update?: SavingsWithdrawalUpdateWithWhereUniqueWithoutSavingsInput | SavingsWithdrawalUpdateWithWhereUniqueWithoutSavingsInput[]
    updateMany?: SavingsWithdrawalUpdateManyWithWhereWithoutSavingsInput | SavingsWithdrawalUpdateManyWithWhereWithoutSavingsInput[]
    deleteMany?: SavingsWithdrawalScalarWhereInput | SavingsWithdrawalScalarWhereInput[]
  }

  export type UserUpdateOneRequiredWithoutSavingsNestedInput = {
    create?: XOR<UserCreateWithoutSavingsInput, UserUncheckedCreateWithoutSavingsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSavingsInput
    upsert?: UserUpsertWithoutSavingsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSavingsInput, UserUpdateWithoutSavingsInput>, UserUncheckedUpdateWithoutSavingsInput>
  }

  export type SavingsEntryUncheckedUpdateManyWithoutSavingsNestedInput = {
    create?: XOR<SavingsEntryCreateWithoutSavingsInput, SavingsEntryUncheckedCreateWithoutSavingsInput> | SavingsEntryCreateWithoutSavingsInput[] | SavingsEntryUncheckedCreateWithoutSavingsInput[]
    connectOrCreate?: SavingsEntryCreateOrConnectWithoutSavingsInput | SavingsEntryCreateOrConnectWithoutSavingsInput[]
    upsert?: SavingsEntryUpsertWithWhereUniqueWithoutSavingsInput | SavingsEntryUpsertWithWhereUniqueWithoutSavingsInput[]
    createMany?: SavingsEntryCreateManySavingsInputEnvelope
    set?: SavingsEntryWhereUniqueInput | SavingsEntryWhereUniqueInput[]
    disconnect?: SavingsEntryWhereUniqueInput | SavingsEntryWhereUniqueInput[]
    delete?: SavingsEntryWhereUniqueInput | SavingsEntryWhereUniqueInput[]
    connect?: SavingsEntryWhereUniqueInput | SavingsEntryWhereUniqueInput[]
    update?: SavingsEntryUpdateWithWhereUniqueWithoutSavingsInput | SavingsEntryUpdateWithWhereUniqueWithoutSavingsInput[]
    updateMany?: SavingsEntryUpdateManyWithWhereWithoutSavingsInput | SavingsEntryUpdateManyWithWhereWithoutSavingsInput[]
    deleteMany?: SavingsEntryScalarWhereInput | SavingsEntryScalarWhereInput[]
  }

  export type SavingsWithdrawalUncheckedUpdateManyWithoutSavingsNestedInput = {
    create?: XOR<SavingsWithdrawalCreateWithoutSavingsInput, SavingsWithdrawalUncheckedCreateWithoutSavingsInput> | SavingsWithdrawalCreateWithoutSavingsInput[] | SavingsWithdrawalUncheckedCreateWithoutSavingsInput[]
    connectOrCreate?: SavingsWithdrawalCreateOrConnectWithoutSavingsInput | SavingsWithdrawalCreateOrConnectWithoutSavingsInput[]
    upsert?: SavingsWithdrawalUpsertWithWhereUniqueWithoutSavingsInput | SavingsWithdrawalUpsertWithWhereUniqueWithoutSavingsInput[]
    createMany?: SavingsWithdrawalCreateManySavingsInputEnvelope
    set?: SavingsWithdrawalWhereUniqueInput | SavingsWithdrawalWhereUniqueInput[]
    disconnect?: SavingsWithdrawalWhereUniqueInput | SavingsWithdrawalWhereUniqueInput[]
    delete?: SavingsWithdrawalWhereUniqueInput | SavingsWithdrawalWhereUniqueInput[]
    connect?: SavingsWithdrawalWhereUniqueInput | SavingsWithdrawalWhereUniqueInput[]
    update?: SavingsWithdrawalUpdateWithWhereUniqueWithoutSavingsInput | SavingsWithdrawalUpdateWithWhereUniqueWithoutSavingsInput[]
    updateMany?: SavingsWithdrawalUpdateManyWithWhereWithoutSavingsInput | SavingsWithdrawalUpdateManyWithWhereWithoutSavingsInput[]
    deleteMany?: SavingsWithdrawalScalarWhereInput | SavingsWithdrawalScalarWhereInput[]
  }

  export type SavingsCreateNestedOneWithoutEntriesInput = {
    create?: XOR<SavingsCreateWithoutEntriesInput, SavingsUncheckedCreateWithoutEntriesInput>
    connectOrCreate?: SavingsCreateOrConnectWithoutEntriesInput
    connect?: SavingsWhereUniqueInput
  }

  export type SavingsUpdateOneRequiredWithoutEntriesNestedInput = {
    create?: XOR<SavingsCreateWithoutEntriesInput, SavingsUncheckedCreateWithoutEntriesInput>
    connectOrCreate?: SavingsCreateOrConnectWithoutEntriesInput
    upsert?: SavingsUpsertWithoutEntriesInput
    connect?: SavingsWhereUniqueInput
    update?: XOR<XOR<SavingsUpdateToOneWithWhereWithoutEntriesInput, SavingsUpdateWithoutEntriesInput>, SavingsUncheckedUpdateWithoutEntriesInput>
  }

  export type SavingsCreateNestedOneWithoutWithdrawalsInput = {
    create?: XOR<SavingsCreateWithoutWithdrawalsInput, SavingsUncheckedCreateWithoutWithdrawalsInput>
    connectOrCreate?: SavingsCreateOrConnectWithoutWithdrawalsInput
    connect?: SavingsWhereUniqueInput
  }

  export type SavingsUpdateOneRequiredWithoutWithdrawalsNestedInput = {
    create?: XOR<SavingsCreateWithoutWithdrawalsInput, SavingsUncheckedCreateWithoutWithdrawalsInput>
    connectOrCreate?: SavingsCreateOrConnectWithoutWithdrawalsInput
    upsert?: SavingsUpsertWithoutWithdrawalsInput
    connect?: SavingsWhereUniqueInput
    update?: XOR<XOR<SavingsUpdateToOneWithWhereWithoutWithdrawalsInput, SavingsUpdateWithoutWithdrawalsInput>, SavingsUncheckedUpdateWithoutWithdrawalsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedEnumExpenseTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ExpenseType | EnumExpenseTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ExpenseType[] | ListEnumExpenseTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ExpenseType[] | ListEnumExpenseTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumExpenseTypeFilter<$PrismaModel> | $Enums.ExpenseType
  }

  export type NestedEnumPaymentMethodFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentMethod | EnumPaymentMethodFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentMethodFilter<$PrismaModel> | $Enums.PaymentMethod
  }

  export type NestedEnumExpenseCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.ExpenseCategory | EnumExpenseCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.ExpenseCategory[] | ListEnumExpenseCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.ExpenseCategory[] | ListEnumExpenseCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumExpenseCategoryFilter<$PrismaModel> | $Enums.ExpenseCategory
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedEnumExpenseTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ExpenseType | EnumExpenseTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ExpenseType[] | ListEnumExpenseTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ExpenseType[] | ListEnumExpenseTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumExpenseTypeWithAggregatesFilter<$PrismaModel> | $Enums.ExpenseType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumExpenseTypeFilter<$PrismaModel>
    _max?: NestedEnumExpenseTypeFilter<$PrismaModel>
  }

  export type NestedEnumPaymentMethodWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentMethod | EnumPaymentMethodFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentMethodWithAggregatesFilter<$PrismaModel> | $Enums.PaymentMethod
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentMethodFilter<$PrismaModel>
    _max?: NestedEnumPaymentMethodFilter<$PrismaModel>
  }

  export type NestedEnumExpenseCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ExpenseCategory | EnumExpenseCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.ExpenseCategory[] | ListEnumExpenseCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.ExpenseCategory[] | ListEnumExpenseCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumExpenseCategoryWithAggregatesFilter<$PrismaModel> | $Enums.ExpenseCategory
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumExpenseCategoryFilter<$PrismaModel>
    _max?: NestedEnumExpenseCategoryFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumIncomeCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.IncomeCategory | EnumIncomeCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.IncomeCategory[] | ListEnumIncomeCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.IncomeCategory[] | ListEnumIncomeCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumIncomeCategoryFilter<$PrismaModel> | $Enums.IncomeCategory
  }

  export type NestedEnumIncomeCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.IncomeCategory | EnumIncomeCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.IncomeCategory[] | ListEnumIncomeCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.IncomeCategory[] | ListEnumIncomeCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumIncomeCategoryWithAggregatesFilter<$PrismaModel> | $Enums.IncomeCategory
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumIncomeCategoryFilter<$PrismaModel>
    _max?: NestedEnumIncomeCategoryFilter<$PrismaModel>
  }

  export type UserCreateWithoutFamilyInput = {
    id?: string
    name: string
    totalMoney: number
    expenses?: ExpenseCreateNestedManyWithoutUserInput
    cards?: CardCreateNestedManyWithoutUserInput
    incomes?: IncomeCreateNestedManyWithoutUserInput
    savings?: SavingsCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutFamilyInput = {
    id?: string
    name: string
    totalMoney: number
    expenses?: ExpenseUncheckedCreateNestedManyWithoutUserInput
    cards?: CardUncheckedCreateNestedManyWithoutUserInput
    incomes?: IncomeUncheckedCreateNestedManyWithoutUserInput
    savings?: SavingsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutFamilyInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFamilyInput, UserUncheckedCreateWithoutFamilyInput>
  }

  export type UserCreateManyFamilyInputEnvelope = {
    data: UserCreateManyFamilyInput | UserCreateManyFamilyInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithWhereUniqueWithoutFamilyInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutFamilyInput, UserUncheckedUpdateWithoutFamilyInput>
    create: XOR<UserCreateWithoutFamilyInput, UserUncheckedCreateWithoutFamilyInput>
  }

  export type UserUpdateWithWhereUniqueWithoutFamilyInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutFamilyInput, UserUncheckedUpdateWithoutFamilyInput>
  }

  export type UserUpdateManyWithWhereWithoutFamilyInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutFamilyInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    totalMoney?: FloatFilter<"User"> | number
    familyId?: StringNullableFilter<"User"> | string | null
  }

  export type ExpenseCreateWithoutUserInput = {
    id?: string
    name: string
    amount: number
    type: $Enums.ExpenseType
    paymentMethod: $Enums.PaymentMethod
    category: $Enums.ExpenseCategory
    description: string
    date: Date | string
  }

  export type ExpenseUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    amount: number
    type: $Enums.ExpenseType
    paymentMethod: $Enums.PaymentMethod
    category: $Enums.ExpenseCategory
    description: string
    date: Date | string
  }

  export type ExpenseCreateOrConnectWithoutUserInput = {
    where: ExpenseWhereUniqueInput
    create: XOR<ExpenseCreateWithoutUserInput, ExpenseUncheckedCreateWithoutUserInput>
  }

  export type ExpenseCreateManyUserInputEnvelope = {
    data: ExpenseCreateManyUserInput | ExpenseCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type CardCreateWithoutUserInput = {
    id?: string
    name: string
    lastFourNumbers: string
    invoiceClosingDay: number
    invoiceAmount: number
    creditLimit: number
    dueDate: number
  }

  export type CardUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    lastFourNumbers: string
    invoiceClosingDay: number
    invoiceAmount: number
    creditLimit: number
    dueDate: number
  }

  export type CardCreateOrConnectWithoutUserInput = {
    where: CardWhereUniqueInput
    create: XOR<CardCreateWithoutUserInput, CardUncheckedCreateWithoutUserInput>
  }

  export type CardCreateManyUserInputEnvelope = {
    data: CardCreateManyUserInput | CardCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type IncomeCreateWithoutUserInput = {
    id?: string
    name: string
    amount: number
    category: $Enums.IncomeCategory
    date: Date | string
  }

  export type IncomeUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    amount: number
    category: $Enums.IncomeCategory
    date: Date | string
  }

  export type IncomeCreateOrConnectWithoutUserInput = {
    where: IncomeWhereUniqueInput
    create: XOR<IncomeCreateWithoutUserInput, IncomeUncheckedCreateWithoutUserInput>
  }

  export type IncomeCreateManyUserInputEnvelope = {
    data: IncomeCreateManyUserInput | IncomeCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SavingsCreateWithoutUserInput = {
    id?: string
    name: string
    totalAmount: number
    entries?: SavingsEntryCreateNestedManyWithoutSavingsInput
    withdrawals?: SavingsWithdrawalCreateNestedManyWithoutSavingsInput
  }

  export type SavingsUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    totalAmount: number
    entries?: SavingsEntryUncheckedCreateNestedManyWithoutSavingsInput
    withdrawals?: SavingsWithdrawalUncheckedCreateNestedManyWithoutSavingsInput
  }

  export type SavingsCreateOrConnectWithoutUserInput = {
    where: SavingsWhereUniqueInput
    create: XOR<SavingsCreateWithoutUserInput, SavingsUncheckedCreateWithoutUserInput>
  }

  export type SavingsCreateManyUserInputEnvelope = {
    data: SavingsCreateManyUserInput | SavingsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type FamilyCreateWithoutUsersInput = {
    id?: string
    name: string
  }

  export type FamilyUncheckedCreateWithoutUsersInput = {
    id?: string
    name: string
  }

  export type FamilyCreateOrConnectWithoutUsersInput = {
    where: FamilyWhereUniqueInput
    create: XOR<FamilyCreateWithoutUsersInput, FamilyUncheckedCreateWithoutUsersInput>
  }

  export type ExpenseUpsertWithWhereUniqueWithoutUserInput = {
    where: ExpenseWhereUniqueInput
    update: XOR<ExpenseUpdateWithoutUserInput, ExpenseUncheckedUpdateWithoutUserInput>
    create: XOR<ExpenseCreateWithoutUserInput, ExpenseUncheckedCreateWithoutUserInput>
  }

  export type ExpenseUpdateWithWhereUniqueWithoutUserInput = {
    where: ExpenseWhereUniqueInput
    data: XOR<ExpenseUpdateWithoutUserInput, ExpenseUncheckedUpdateWithoutUserInput>
  }

  export type ExpenseUpdateManyWithWhereWithoutUserInput = {
    where: ExpenseScalarWhereInput
    data: XOR<ExpenseUpdateManyMutationInput, ExpenseUncheckedUpdateManyWithoutUserInput>
  }

  export type ExpenseScalarWhereInput = {
    AND?: ExpenseScalarWhereInput | ExpenseScalarWhereInput[]
    OR?: ExpenseScalarWhereInput[]
    NOT?: ExpenseScalarWhereInput | ExpenseScalarWhereInput[]
    id?: StringFilter<"Expense"> | string
    name?: StringFilter<"Expense"> | string
    amount?: FloatFilter<"Expense"> | number
    type?: EnumExpenseTypeFilter<"Expense"> | $Enums.ExpenseType
    paymentMethod?: EnumPaymentMethodFilter<"Expense"> | $Enums.PaymentMethod
    category?: EnumExpenseCategoryFilter<"Expense"> | $Enums.ExpenseCategory
    description?: StringFilter<"Expense"> | string
    date?: DateTimeFilter<"Expense"> | Date | string
    userId?: StringFilter<"Expense"> | string
  }

  export type CardUpsertWithWhereUniqueWithoutUserInput = {
    where: CardWhereUniqueInput
    update: XOR<CardUpdateWithoutUserInput, CardUncheckedUpdateWithoutUserInput>
    create: XOR<CardCreateWithoutUserInput, CardUncheckedCreateWithoutUserInput>
  }

  export type CardUpdateWithWhereUniqueWithoutUserInput = {
    where: CardWhereUniqueInput
    data: XOR<CardUpdateWithoutUserInput, CardUncheckedUpdateWithoutUserInput>
  }

  export type CardUpdateManyWithWhereWithoutUserInput = {
    where: CardScalarWhereInput
    data: XOR<CardUpdateManyMutationInput, CardUncheckedUpdateManyWithoutUserInput>
  }

  export type CardScalarWhereInput = {
    AND?: CardScalarWhereInput | CardScalarWhereInput[]
    OR?: CardScalarWhereInput[]
    NOT?: CardScalarWhereInput | CardScalarWhereInput[]
    id?: StringFilter<"Card"> | string
    name?: StringFilter<"Card"> | string
    lastFourNumbers?: StringFilter<"Card"> | string
    invoiceClosingDay?: IntFilter<"Card"> | number
    invoiceAmount?: FloatFilter<"Card"> | number
    creditLimit?: FloatFilter<"Card"> | number
    dueDate?: IntFilter<"Card"> | number
    userId?: StringFilter<"Card"> | string
  }

  export type IncomeUpsertWithWhereUniqueWithoutUserInput = {
    where: IncomeWhereUniqueInput
    update: XOR<IncomeUpdateWithoutUserInput, IncomeUncheckedUpdateWithoutUserInput>
    create: XOR<IncomeCreateWithoutUserInput, IncomeUncheckedCreateWithoutUserInput>
  }

  export type IncomeUpdateWithWhereUniqueWithoutUserInput = {
    where: IncomeWhereUniqueInput
    data: XOR<IncomeUpdateWithoutUserInput, IncomeUncheckedUpdateWithoutUserInput>
  }

  export type IncomeUpdateManyWithWhereWithoutUserInput = {
    where: IncomeScalarWhereInput
    data: XOR<IncomeUpdateManyMutationInput, IncomeUncheckedUpdateManyWithoutUserInput>
  }

  export type IncomeScalarWhereInput = {
    AND?: IncomeScalarWhereInput | IncomeScalarWhereInput[]
    OR?: IncomeScalarWhereInput[]
    NOT?: IncomeScalarWhereInput | IncomeScalarWhereInput[]
    id?: StringFilter<"Income"> | string
    name?: StringFilter<"Income"> | string
    amount?: FloatFilter<"Income"> | number
    category?: EnumIncomeCategoryFilter<"Income"> | $Enums.IncomeCategory
    date?: DateTimeFilter<"Income"> | Date | string
    userId?: StringFilter<"Income"> | string
  }

  export type SavingsUpsertWithWhereUniqueWithoutUserInput = {
    where: SavingsWhereUniqueInput
    update: XOR<SavingsUpdateWithoutUserInput, SavingsUncheckedUpdateWithoutUserInput>
    create: XOR<SavingsCreateWithoutUserInput, SavingsUncheckedCreateWithoutUserInput>
  }

  export type SavingsUpdateWithWhereUniqueWithoutUserInput = {
    where: SavingsWhereUniqueInput
    data: XOR<SavingsUpdateWithoutUserInput, SavingsUncheckedUpdateWithoutUserInput>
  }

  export type SavingsUpdateManyWithWhereWithoutUserInput = {
    where: SavingsScalarWhereInput
    data: XOR<SavingsUpdateManyMutationInput, SavingsUncheckedUpdateManyWithoutUserInput>
  }

  export type SavingsScalarWhereInput = {
    AND?: SavingsScalarWhereInput | SavingsScalarWhereInput[]
    OR?: SavingsScalarWhereInput[]
    NOT?: SavingsScalarWhereInput | SavingsScalarWhereInput[]
    id?: StringFilter<"Savings"> | string
    name?: StringFilter<"Savings"> | string
    totalAmount?: FloatFilter<"Savings"> | number
    userId?: StringFilter<"Savings"> | string
  }

  export type FamilyUpsertWithoutUsersInput = {
    update: XOR<FamilyUpdateWithoutUsersInput, FamilyUncheckedUpdateWithoutUsersInput>
    create: XOR<FamilyCreateWithoutUsersInput, FamilyUncheckedCreateWithoutUsersInput>
    where?: FamilyWhereInput
  }

  export type FamilyUpdateToOneWithWhereWithoutUsersInput = {
    where?: FamilyWhereInput
    data: XOR<FamilyUpdateWithoutUsersInput, FamilyUncheckedUpdateWithoutUsersInput>
  }

  export type FamilyUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type FamilyUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type UserCreateWithoutCardsInput = {
    id?: string
    name: string
    totalMoney: number
    expenses?: ExpenseCreateNestedManyWithoutUserInput
    incomes?: IncomeCreateNestedManyWithoutUserInput
    savings?: SavingsCreateNestedManyWithoutUserInput
    family?: FamilyCreateNestedOneWithoutUsersInput
  }

  export type UserUncheckedCreateWithoutCardsInput = {
    id?: string
    name: string
    totalMoney: number
    familyId?: string | null
    expenses?: ExpenseUncheckedCreateNestedManyWithoutUserInput
    incomes?: IncomeUncheckedCreateNestedManyWithoutUserInput
    savings?: SavingsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCardsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCardsInput, UserUncheckedCreateWithoutCardsInput>
  }

  export type UserUpsertWithoutCardsInput = {
    update: XOR<UserUpdateWithoutCardsInput, UserUncheckedUpdateWithoutCardsInput>
    create: XOR<UserCreateWithoutCardsInput, UserUncheckedCreateWithoutCardsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCardsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCardsInput, UserUncheckedUpdateWithoutCardsInput>
  }

  export type UserUpdateWithoutCardsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    totalMoney?: FloatFieldUpdateOperationsInput | number
    expenses?: ExpenseUpdateManyWithoutUserNestedInput
    incomes?: IncomeUpdateManyWithoutUserNestedInput
    savings?: SavingsUpdateManyWithoutUserNestedInput
    family?: FamilyUpdateOneWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateWithoutCardsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    totalMoney?: FloatFieldUpdateOperationsInput | number
    familyId?: NullableStringFieldUpdateOperationsInput | string | null
    expenses?: ExpenseUncheckedUpdateManyWithoutUserNestedInput
    incomes?: IncomeUncheckedUpdateManyWithoutUserNestedInput
    savings?: SavingsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutExpensesInput = {
    id?: string
    name: string
    totalMoney: number
    cards?: CardCreateNestedManyWithoutUserInput
    incomes?: IncomeCreateNestedManyWithoutUserInput
    savings?: SavingsCreateNestedManyWithoutUserInput
    family?: FamilyCreateNestedOneWithoutUsersInput
  }

  export type UserUncheckedCreateWithoutExpensesInput = {
    id?: string
    name: string
    totalMoney: number
    familyId?: string | null
    cards?: CardUncheckedCreateNestedManyWithoutUserInput
    incomes?: IncomeUncheckedCreateNestedManyWithoutUserInput
    savings?: SavingsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutExpensesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutExpensesInput, UserUncheckedCreateWithoutExpensesInput>
  }

  export type UserUpsertWithoutExpensesInput = {
    update: XOR<UserUpdateWithoutExpensesInput, UserUncheckedUpdateWithoutExpensesInput>
    create: XOR<UserCreateWithoutExpensesInput, UserUncheckedCreateWithoutExpensesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutExpensesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutExpensesInput, UserUncheckedUpdateWithoutExpensesInput>
  }

  export type UserUpdateWithoutExpensesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    totalMoney?: FloatFieldUpdateOperationsInput | number
    cards?: CardUpdateManyWithoutUserNestedInput
    incomes?: IncomeUpdateManyWithoutUserNestedInput
    savings?: SavingsUpdateManyWithoutUserNestedInput
    family?: FamilyUpdateOneWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateWithoutExpensesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    totalMoney?: FloatFieldUpdateOperationsInput | number
    familyId?: NullableStringFieldUpdateOperationsInput | string | null
    cards?: CardUncheckedUpdateManyWithoutUserNestedInput
    incomes?: IncomeUncheckedUpdateManyWithoutUserNestedInput
    savings?: SavingsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutIncomesInput = {
    id?: string
    name: string
    totalMoney: number
    expenses?: ExpenseCreateNestedManyWithoutUserInput
    cards?: CardCreateNestedManyWithoutUserInput
    savings?: SavingsCreateNestedManyWithoutUserInput
    family?: FamilyCreateNestedOneWithoutUsersInput
  }

  export type UserUncheckedCreateWithoutIncomesInput = {
    id?: string
    name: string
    totalMoney: number
    familyId?: string | null
    expenses?: ExpenseUncheckedCreateNestedManyWithoutUserInput
    cards?: CardUncheckedCreateNestedManyWithoutUserInput
    savings?: SavingsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutIncomesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutIncomesInput, UserUncheckedCreateWithoutIncomesInput>
  }

  export type UserUpsertWithoutIncomesInput = {
    update: XOR<UserUpdateWithoutIncomesInput, UserUncheckedUpdateWithoutIncomesInput>
    create: XOR<UserCreateWithoutIncomesInput, UserUncheckedCreateWithoutIncomesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutIncomesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutIncomesInput, UserUncheckedUpdateWithoutIncomesInput>
  }

  export type UserUpdateWithoutIncomesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    totalMoney?: FloatFieldUpdateOperationsInput | number
    expenses?: ExpenseUpdateManyWithoutUserNestedInput
    cards?: CardUpdateManyWithoutUserNestedInput
    savings?: SavingsUpdateManyWithoutUserNestedInput
    family?: FamilyUpdateOneWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateWithoutIncomesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    totalMoney?: FloatFieldUpdateOperationsInput | number
    familyId?: NullableStringFieldUpdateOperationsInput | string | null
    expenses?: ExpenseUncheckedUpdateManyWithoutUserNestedInput
    cards?: CardUncheckedUpdateManyWithoutUserNestedInput
    savings?: SavingsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type SavingsEntryCreateWithoutSavingsInput = {
    id?: string
    amount: number
    date: Date | string
  }

  export type SavingsEntryUncheckedCreateWithoutSavingsInput = {
    id?: string
    amount: number
    date: Date | string
  }

  export type SavingsEntryCreateOrConnectWithoutSavingsInput = {
    where: SavingsEntryWhereUniqueInput
    create: XOR<SavingsEntryCreateWithoutSavingsInput, SavingsEntryUncheckedCreateWithoutSavingsInput>
  }

  export type SavingsEntryCreateManySavingsInputEnvelope = {
    data: SavingsEntryCreateManySavingsInput | SavingsEntryCreateManySavingsInput[]
    skipDuplicates?: boolean
  }

  export type SavingsWithdrawalCreateWithoutSavingsInput = {
    id?: string
    amount: number
    date: Date | string
  }

  export type SavingsWithdrawalUncheckedCreateWithoutSavingsInput = {
    id?: string
    amount: number
    date: Date | string
  }

  export type SavingsWithdrawalCreateOrConnectWithoutSavingsInput = {
    where: SavingsWithdrawalWhereUniqueInput
    create: XOR<SavingsWithdrawalCreateWithoutSavingsInput, SavingsWithdrawalUncheckedCreateWithoutSavingsInput>
  }

  export type SavingsWithdrawalCreateManySavingsInputEnvelope = {
    data: SavingsWithdrawalCreateManySavingsInput | SavingsWithdrawalCreateManySavingsInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutSavingsInput = {
    id?: string
    name: string
    totalMoney: number
    expenses?: ExpenseCreateNestedManyWithoutUserInput
    cards?: CardCreateNestedManyWithoutUserInput
    incomes?: IncomeCreateNestedManyWithoutUserInput
    family?: FamilyCreateNestedOneWithoutUsersInput
  }

  export type UserUncheckedCreateWithoutSavingsInput = {
    id?: string
    name: string
    totalMoney: number
    familyId?: string | null
    expenses?: ExpenseUncheckedCreateNestedManyWithoutUserInput
    cards?: CardUncheckedCreateNestedManyWithoutUserInput
    incomes?: IncomeUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSavingsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSavingsInput, UserUncheckedCreateWithoutSavingsInput>
  }

  export type SavingsEntryUpsertWithWhereUniqueWithoutSavingsInput = {
    where: SavingsEntryWhereUniqueInput
    update: XOR<SavingsEntryUpdateWithoutSavingsInput, SavingsEntryUncheckedUpdateWithoutSavingsInput>
    create: XOR<SavingsEntryCreateWithoutSavingsInput, SavingsEntryUncheckedCreateWithoutSavingsInput>
  }

  export type SavingsEntryUpdateWithWhereUniqueWithoutSavingsInput = {
    where: SavingsEntryWhereUniqueInput
    data: XOR<SavingsEntryUpdateWithoutSavingsInput, SavingsEntryUncheckedUpdateWithoutSavingsInput>
  }

  export type SavingsEntryUpdateManyWithWhereWithoutSavingsInput = {
    where: SavingsEntryScalarWhereInput
    data: XOR<SavingsEntryUpdateManyMutationInput, SavingsEntryUncheckedUpdateManyWithoutSavingsInput>
  }

  export type SavingsEntryScalarWhereInput = {
    AND?: SavingsEntryScalarWhereInput | SavingsEntryScalarWhereInput[]
    OR?: SavingsEntryScalarWhereInput[]
    NOT?: SavingsEntryScalarWhereInput | SavingsEntryScalarWhereInput[]
    id?: StringFilter<"SavingsEntry"> | string
    amount?: FloatFilter<"SavingsEntry"> | number
    date?: DateTimeFilter<"SavingsEntry"> | Date | string
    savingsId?: StringFilter<"SavingsEntry"> | string
  }

  export type SavingsWithdrawalUpsertWithWhereUniqueWithoutSavingsInput = {
    where: SavingsWithdrawalWhereUniqueInput
    update: XOR<SavingsWithdrawalUpdateWithoutSavingsInput, SavingsWithdrawalUncheckedUpdateWithoutSavingsInput>
    create: XOR<SavingsWithdrawalCreateWithoutSavingsInput, SavingsWithdrawalUncheckedCreateWithoutSavingsInput>
  }

  export type SavingsWithdrawalUpdateWithWhereUniqueWithoutSavingsInput = {
    where: SavingsWithdrawalWhereUniqueInput
    data: XOR<SavingsWithdrawalUpdateWithoutSavingsInput, SavingsWithdrawalUncheckedUpdateWithoutSavingsInput>
  }

  export type SavingsWithdrawalUpdateManyWithWhereWithoutSavingsInput = {
    where: SavingsWithdrawalScalarWhereInput
    data: XOR<SavingsWithdrawalUpdateManyMutationInput, SavingsWithdrawalUncheckedUpdateManyWithoutSavingsInput>
  }

  export type SavingsWithdrawalScalarWhereInput = {
    AND?: SavingsWithdrawalScalarWhereInput | SavingsWithdrawalScalarWhereInput[]
    OR?: SavingsWithdrawalScalarWhereInput[]
    NOT?: SavingsWithdrawalScalarWhereInput | SavingsWithdrawalScalarWhereInput[]
    id?: StringFilter<"SavingsWithdrawal"> | string
    amount?: FloatFilter<"SavingsWithdrawal"> | number
    date?: DateTimeFilter<"SavingsWithdrawal"> | Date | string
    savingsId?: StringFilter<"SavingsWithdrawal"> | string
  }

  export type UserUpsertWithoutSavingsInput = {
    update: XOR<UserUpdateWithoutSavingsInput, UserUncheckedUpdateWithoutSavingsInput>
    create: XOR<UserCreateWithoutSavingsInput, UserUncheckedCreateWithoutSavingsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSavingsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSavingsInput, UserUncheckedUpdateWithoutSavingsInput>
  }

  export type UserUpdateWithoutSavingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    totalMoney?: FloatFieldUpdateOperationsInput | number
    expenses?: ExpenseUpdateManyWithoutUserNestedInput
    cards?: CardUpdateManyWithoutUserNestedInput
    incomes?: IncomeUpdateManyWithoutUserNestedInput
    family?: FamilyUpdateOneWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateWithoutSavingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    totalMoney?: FloatFieldUpdateOperationsInput | number
    familyId?: NullableStringFieldUpdateOperationsInput | string | null
    expenses?: ExpenseUncheckedUpdateManyWithoutUserNestedInput
    cards?: CardUncheckedUpdateManyWithoutUserNestedInput
    incomes?: IncomeUncheckedUpdateManyWithoutUserNestedInput
  }

  export type SavingsCreateWithoutEntriesInput = {
    id?: string
    name: string
    totalAmount: number
    withdrawals?: SavingsWithdrawalCreateNestedManyWithoutSavingsInput
    user: UserCreateNestedOneWithoutSavingsInput
  }

  export type SavingsUncheckedCreateWithoutEntriesInput = {
    id?: string
    name: string
    totalAmount: number
    userId: string
    withdrawals?: SavingsWithdrawalUncheckedCreateNestedManyWithoutSavingsInput
  }

  export type SavingsCreateOrConnectWithoutEntriesInput = {
    where: SavingsWhereUniqueInput
    create: XOR<SavingsCreateWithoutEntriesInput, SavingsUncheckedCreateWithoutEntriesInput>
  }

  export type SavingsUpsertWithoutEntriesInput = {
    update: XOR<SavingsUpdateWithoutEntriesInput, SavingsUncheckedUpdateWithoutEntriesInput>
    create: XOR<SavingsCreateWithoutEntriesInput, SavingsUncheckedCreateWithoutEntriesInput>
    where?: SavingsWhereInput
  }

  export type SavingsUpdateToOneWithWhereWithoutEntriesInput = {
    where?: SavingsWhereInput
    data: XOR<SavingsUpdateWithoutEntriesInput, SavingsUncheckedUpdateWithoutEntriesInput>
  }

  export type SavingsUpdateWithoutEntriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    totalAmount?: FloatFieldUpdateOperationsInput | number
    withdrawals?: SavingsWithdrawalUpdateManyWithoutSavingsNestedInput
    user?: UserUpdateOneRequiredWithoutSavingsNestedInput
  }

  export type SavingsUncheckedUpdateWithoutEntriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    totalAmount?: FloatFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    withdrawals?: SavingsWithdrawalUncheckedUpdateManyWithoutSavingsNestedInput
  }

  export type SavingsCreateWithoutWithdrawalsInput = {
    id?: string
    name: string
    totalAmount: number
    entries?: SavingsEntryCreateNestedManyWithoutSavingsInput
    user: UserCreateNestedOneWithoutSavingsInput
  }

  export type SavingsUncheckedCreateWithoutWithdrawalsInput = {
    id?: string
    name: string
    totalAmount: number
    userId: string
    entries?: SavingsEntryUncheckedCreateNestedManyWithoutSavingsInput
  }

  export type SavingsCreateOrConnectWithoutWithdrawalsInput = {
    where: SavingsWhereUniqueInput
    create: XOR<SavingsCreateWithoutWithdrawalsInput, SavingsUncheckedCreateWithoutWithdrawalsInput>
  }

  export type SavingsUpsertWithoutWithdrawalsInput = {
    update: XOR<SavingsUpdateWithoutWithdrawalsInput, SavingsUncheckedUpdateWithoutWithdrawalsInput>
    create: XOR<SavingsCreateWithoutWithdrawalsInput, SavingsUncheckedCreateWithoutWithdrawalsInput>
    where?: SavingsWhereInput
  }

  export type SavingsUpdateToOneWithWhereWithoutWithdrawalsInput = {
    where?: SavingsWhereInput
    data: XOR<SavingsUpdateWithoutWithdrawalsInput, SavingsUncheckedUpdateWithoutWithdrawalsInput>
  }

  export type SavingsUpdateWithoutWithdrawalsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    totalAmount?: FloatFieldUpdateOperationsInput | number
    entries?: SavingsEntryUpdateManyWithoutSavingsNestedInput
    user?: UserUpdateOneRequiredWithoutSavingsNestedInput
  }

  export type SavingsUncheckedUpdateWithoutWithdrawalsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    totalAmount?: FloatFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    entries?: SavingsEntryUncheckedUpdateManyWithoutSavingsNestedInput
  }

  export type UserCreateManyFamilyInput = {
    id?: string
    name: string
    totalMoney: number
  }

  export type UserUpdateWithoutFamilyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    totalMoney?: FloatFieldUpdateOperationsInput | number
    expenses?: ExpenseUpdateManyWithoutUserNestedInput
    cards?: CardUpdateManyWithoutUserNestedInput
    incomes?: IncomeUpdateManyWithoutUserNestedInput
    savings?: SavingsUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutFamilyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    totalMoney?: FloatFieldUpdateOperationsInput | number
    expenses?: ExpenseUncheckedUpdateManyWithoutUserNestedInput
    cards?: CardUncheckedUpdateManyWithoutUserNestedInput
    incomes?: IncomeUncheckedUpdateManyWithoutUserNestedInput
    savings?: SavingsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutFamilyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    totalMoney?: FloatFieldUpdateOperationsInput | number
  }

  export type ExpenseCreateManyUserInput = {
    id?: string
    name: string
    amount: number
    type: $Enums.ExpenseType
    paymentMethod: $Enums.PaymentMethod
    category: $Enums.ExpenseCategory
    description: string
    date: Date | string
  }

  export type CardCreateManyUserInput = {
    id?: string
    name: string
    lastFourNumbers: string
    invoiceClosingDay: number
    invoiceAmount: number
    creditLimit: number
    dueDate: number
  }

  export type IncomeCreateManyUserInput = {
    id?: string
    name: string
    amount: number
    category: $Enums.IncomeCategory
    date: Date | string
  }

  export type SavingsCreateManyUserInput = {
    id?: string
    name: string
    totalAmount: number
  }

  export type ExpenseUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    type?: EnumExpenseTypeFieldUpdateOperationsInput | $Enums.ExpenseType
    paymentMethod?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    category?: EnumExpenseCategoryFieldUpdateOperationsInput | $Enums.ExpenseCategory
    description?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExpenseUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    type?: EnumExpenseTypeFieldUpdateOperationsInput | $Enums.ExpenseType
    paymentMethod?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    category?: EnumExpenseCategoryFieldUpdateOperationsInput | $Enums.ExpenseCategory
    description?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExpenseUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    type?: EnumExpenseTypeFieldUpdateOperationsInput | $Enums.ExpenseType
    paymentMethod?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    category?: EnumExpenseCategoryFieldUpdateOperationsInput | $Enums.ExpenseCategory
    description?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CardUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    lastFourNumbers?: StringFieldUpdateOperationsInput | string
    invoiceClosingDay?: IntFieldUpdateOperationsInput | number
    invoiceAmount?: FloatFieldUpdateOperationsInput | number
    creditLimit?: FloatFieldUpdateOperationsInput | number
    dueDate?: IntFieldUpdateOperationsInput | number
  }

  export type CardUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    lastFourNumbers?: StringFieldUpdateOperationsInput | string
    invoiceClosingDay?: IntFieldUpdateOperationsInput | number
    invoiceAmount?: FloatFieldUpdateOperationsInput | number
    creditLimit?: FloatFieldUpdateOperationsInput | number
    dueDate?: IntFieldUpdateOperationsInput | number
  }

  export type CardUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    lastFourNumbers?: StringFieldUpdateOperationsInput | string
    invoiceClosingDay?: IntFieldUpdateOperationsInput | number
    invoiceAmount?: FloatFieldUpdateOperationsInput | number
    creditLimit?: FloatFieldUpdateOperationsInput | number
    dueDate?: IntFieldUpdateOperationsInput | number
  }

  export type IncomeUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    category?: EnumIncomeCategoryFieldUpdateOperationsInput | $Enums.IncomeCategory
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IncomeUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    category?: EnumIncomeCategoryFieldUpdateOperationsInput | $Enums.IncomeCategory
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IncomeUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    category?: EnumIncomeCategoryFieldUpdateOperationsInput | $Enums.IncomeCategory
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SavingsUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    totalAmount?: FloatFieldUpdateOperationsInput | number
    entries?: SavingsEntryUpdateManyWithoutSavingsNestedInput
    withdrawals?: SavingsWithdrawalUpdateManyWithoutSavingsNestedInput
  }

  export type SavingsUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    totalAmount?: FloatFieldUpdateOperationsInput | number
    entries?: SavingsEntryUncheckedUpdateManyWithoutSavingsNestedInput
    withdrawals?: SavingsWithdrawalUncheckedUpdateManyWithoutSavingsNestedInput
  }

  export type SavingsUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    totalAmount?: FloatFieldUpdateOperationsInput | number
  }

  export type SavingsEntryCreateManySavingsInput = {
    id?: string
    amount: number
    date: Date | string
  }

  export type SavingsWithdrawalCreateManySavingsInput = {
    id?: string
    amount: number
    date: Date | string
  }

  export type SavingsEntryUpdateWithoutSavingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SavingsEntryUncheckedUpdateWithoutSavingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SavingsEntryUncheckedUpdateManyWithoutSavingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SavingsWithdrawalUpdateWithoutSavingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SavingsWithdrawalUncheckedUpdateWithoutSavingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SavingsWithdrawalUncheckedUpdateManyWithoutSavingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use FamilyCountOutputTypeDefaultArgs instead
     */
    export type FamilyCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = FamilyCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SavingsCountOutputTypeDefaultArgs instead
     */
    export type SavingsCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SavingsCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use FamilyDefaultArgs instead
     */
    export type FamilyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = FamilyDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CardDefaultArgs instead
     */
    export type CardArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CardDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ExpenseDefaultArgs instead
     */
    export type ExpenseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ExpenseDefaultArgs<ExtArgs>
    /**
     * @deprecated Use IncomeDefaultArgs instead
     */
    export type IncomeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = IncomeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SavingsDefaultArgs instead
     */
    export type SavingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SavingsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SavingsEntryDefaultArgs instead
     */
    export type SavingsEntryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SavingsEntryDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SavingsWithdrawalDefaultArgs instead
     */
    export type SavingsWithdrawalArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SavingsWithdrawalDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}
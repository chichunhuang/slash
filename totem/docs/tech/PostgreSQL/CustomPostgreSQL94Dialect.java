/*
 * created on Oct 8, 2018
 * 
 * $Author: Teddy $
 * $Revision: 1.0 $ 
 * $Date: Oct 8, 2018 $
 */
package koopa.answer.dao;

import org.hibernate.dialect.PostgreSQL94Dialect;
import org.hibernate.dialect.function.SQLFunctionTemplate;
import org.hibernate.type.StringType;

public class CustomPostgreSQL94Dialect extends PostgreSQL94Dialect {

	public CustomPostgreSQL94Dialect() {
		super();
		registerFunction("spilt_order_by", new SQLFunctionTemplate(
				StringType.INSTANCE,
				" case when ?1 like '%-%' then regexp_split_to_array( substring(?1, 3), '-')::int[] else array[0] end "));
	}

}

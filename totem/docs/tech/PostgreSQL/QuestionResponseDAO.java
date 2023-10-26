/*
 * created on 2016年4月15日
 * 
 * $Author: user $
 * $Revision: 1.0 $ 
 * $Date: 2016年4月15日 $
 */
package koopa.answer.dao;

import java.util.List;

import org.bioinfo.util.hibernate.GenericHibernateDAO;
import org.springframework.stereotype.Repository;

import koopa.answer.QuestionResponse;

@Repository
public class QuestionResponseDAO extends GenericHibernateDAO<QuestionResponse> {

	@SuppressWarnings("unchecked")
	public List<QuestionResponse> findByAnswerBook(String barcode) {

		String hql = " from QuestionResponse qr join fetch qr.question q "
				+ " join fetch qr.answerBook ab where ab.barcode = :barcode "
				+ " order by substring(q.qNumber, 1, 1),  spilt_order_by(q.qNumber) ";

		return (List<QuestionResponse>) hibernateTemplate.findByNamedParam(hql,
				"barcode", barcode);
	}
}

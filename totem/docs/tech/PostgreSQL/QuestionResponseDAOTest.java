/*
 * created on Oct 8, 2018
 * 
 * $Author: Teddy $
 * $Revision: 1.0 $ 
 * $Date: Oct 8, 2018 $
 */
package koopa.answer.dao;

import static org.junit.Assert.*;

import java.util.List;

import org.junit.Test;

import koopa.answer.QuestionResponse;
import koopa.test.dao.BaseDAOTestCase;

public class QuestionResponseDAOTest extends BaseDAOTestCase<QuestionResponse> {
	
	private QuestionResponseDAO dao;

	@Override
	protected void onSetUpBeginDummyTransaction() throws Exception {
		dao = new QuestionResponseDAO();
		dao.setHibernateTemplate(getHibernateTemplate());
	}

	@Override
	protected void onTearDownBeforeRollback() throws Exception {
		
	}
	
	@Test
	public void testFindByAnswerBook() throws Exception {
		clearSessionBeforeVerify();
		List<QuestionResponse> qrs = dao.findByAnswerBook("POP051-OA");
		for (QuestionResponse qr : qrs) {
			System.err.println(qr.getQNumber().toNoSequence());
		}
	}
	

}
